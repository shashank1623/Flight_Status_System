
import os
from pymongo import MongoClient
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# MongoDB Connection
MONGODB_URI = os.getenv('MONGODB_URI')
client = MongoClient(MONGODB_URI)
db = client['Indigo_flight_status_db']

# Collections
users_collection = db['users']
flights_collection = db['flights']
notifications_collection = db['notifications']

def create_user(data):
    users_collection.insert_one(data)

def find_user_by_email(email):
    return users_collection.find_one({'email': email})

def create_flight(data):
    flights_collection.insert_one(data)

def get_all_flights():
    return list(flights_collection.find())

def get_flight_by_number(flight_number):
    return flights_collection.find_one({'flightNumber': flight_number})

def log_notification(data):
    notifications_collection.insert_one(data)
