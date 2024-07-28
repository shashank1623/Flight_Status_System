import os
from flask import Flask, request, jsonify , g
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
import pika
from dotenv import load_dotenv
from db import create_user, find_user_by_email, create_flight, get_all_flights, get_flight_by_number, log_notification
from auth import encode_auth_token, decode_auth_token
from functools import wraps

#load the environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

def convert_to_serializable(flight):
    flight['_id'] = str(flight['_id'])
    return flight

@app.route('/')
def home():
    return "Jinda hu bhai"

@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    
    
    if not data or not 'email' in data or not 'password' in data or not 'name' in data:
        return jsonify({'message': 'Invalid data'}), 400

    #print the data
    #print(data)

    user = find_user_by_email(data['email'])
    #print(user)
    if user:
        return jsonify({'message': 'User already exists'}), 409
    
    hashed_password = generate_password_hash(data['password'], method='pbkdf2:sha256')
    user_data = {
        'name': data['name'],
        'email': data['email'],
        'password': hashed_password
    }
    #return jsonify({"user_data" : user_data}), 201
    create_user(user_data)
    user = find_user_by_email(data['email'])
    token = encode_auth_token(str(user['_id']))
    return jsonify({"jwt" : token}),201


@app.route('/signin', methods=['POST'])
def signin():
    data = request.json
    if not data or not 'email' in data or not 'password' in data:
        return jsonify({'message': 'Invalid data'}), 400
    
    user = find_user_by_email(data['email'])
    if not user or not check_password_hash(user['password'], data['password']):
        return jsonify({'message': 'Invalid email or password'}), 401
    
    token = encode_auth_token(str(user['_id']))
    return jsonify({'token': token}), 200

def token_required(f):
    @wraps(f)
    def _verify(*args, **kwargs):
        auth_header = request.headers.get('Authorization')
        if not auth_header:
            return jsonify({'message': 'Token is missing!'}), 401
        try:
            token = auth_header.split(" ")[1]
            user_id = decode_auth_token(token)
            print("Decoded user_id:", user_id)
            if isinstance(user_id, str):
                g.user_id = user_id
            else:
                print("Error message:", user_id)
                return jsonify({'message': user_id}), 401
        except Exception as e:
            print("Exception:", str(e))
            return jsonify({'message': 'Token is invalid!'}), 401
        return f(*args, **kwargs)
    return _verify

@app.route('/flights', methods=['GET'])
@token_required
def get_flights():
    flights = get_all_flights()
    #print
    flights = [convert_to_serializable(flight) for flight in flights]
    return jsonify(flights), 200

@app.route('/flights/<flight_number>', methods=['GET'])
@token_required
def get_flight(flight_number):
    flight = get_flight_by_number(flight_number)
    return jsonify(convert_to_serializable(flight)) if flight else ('Not Found', 404)


if __name__ == '__main__':
    app.run(debug=True)
