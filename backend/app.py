import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
import pika
from dotenv import load_dotenv
from db import create_user, find_user_by_email, create_flight, get_all_flights, get_flight_by_number, log_notification


#load the environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Jinda hu bhai"

@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    
    
    if not data or not 'email' in data or not 'password' in data or not 'name' in data:
        return jsonify({'message': 'Invalid data'}), 400

    #print the data
    print(data)

    user = find_user_by_email(data['email'])
    print(user)
    if user:
        return jsonify({'message': 'User already exists'}), 409

    return jsonify({"message":"Bhai aa rha hai data aur print bhi ho rha hai"})

if __name__ == '__main__':
    app.run(debug=True)
