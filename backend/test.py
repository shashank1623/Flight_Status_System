import os
from pymongo import MongoClient
from dotenv import load_dotenv
import asyncio

# Load environment variables from .env file
load_dotenv()

# MongoDB Connection
MONGODB_URI = os.getenv('MONGODB_URI')
client = MongoClient(MONGODB_URI)
db = client['Indigo_flight_status_db']

# Sample Data
"""
users = [
    {
        "name": "Shashank Bhardwaj",
        "email": "shashankbhardwaj2030@gmail.com",
        "password": "Hello@123"  # Replace with actual hashed password
    }
]
"""
flights = [
    {
        "airline": "American Airlines",
        "arrivalTime": "2024-07-27T13:00:00Z",
        "departureTime": "2024-07-27T10:00:00Z",
        "destination": "LAX",
        "flightNumber": "AA101",
        "source": "JFK",
        "status": "On Time",
        "flightType": "Arrival"
    },
    {
        "airline": "SingaPore Airlines",
        "arrivalTime": "2024-07-27T13:00:00Z",
        "departureTime": "2024-07-27T10:00:00Z",
        "destination": "JFK",
        "flightNumber": "SA201",
        "source": "HKG",
        "status": "On Time",
        "flightType": "Arrival"
    },
    {
        "airline": "United Airlines",
        "arrivalTime": "2024-07-27T13:00:00Z",
        "departureTime": "2024-07-27T10:00:00Z",
        "destination": "LAX",
        "flightNumber": "UA201",
        "source": "JFK",
        "status": "On Time",
        "flightType": "Arrival"
    },
    {
        
        "airline": "Delta Airlines",
        "arrivalTime": "2024-07-27T13:00:00Z",
        "departureTime": "2024-07-27T10:00:00Z",
        "destination": "LAX",
        "flightNumber": "DL201",
        "source": "JFK",
        "status": "On Time",
        "flightType": "Arrival" 
    },
    {
        "airline": "British Airways",
        "arrivalTime": "2024-07-27T13:00:00Z",
        "departureTime": "2024-07-27T10:00:00Z",
        "destination": "LAX",
        "flightNumber": "BA201",
        "source": "JFK",
        "status": "On Time",
        "flightType": "Arrival"
    },
    {
        "airline": "Air France",
        "arrivalTime": "2024-07-27T13:00:00Z",
        "departureTime": "2024-07-27T10:00:00Z",
        "destination": "LAX",
        "flightNumber": "AF201",
        "source": "JFK",
        "status": "On Time",
        "flightType": "Arrival"
    },
    {
        "airline": "Emirates",
        "arrivalTime": "2024-07-27T13:00:00Z",
        "departureTime": "2024-07-27T10:00:00Z",
        "destination": "LAX",
        "flightNumber": "EK201",
        "source": "JFK",
        "status": "On Time",
        "flightType": "Arrival" 
    },
    {
        "airline": "Turkish Airlines",
        "arrivalTime": "2024-07-27T13:00:00Z",
        "departureTime": "2024-07-27T10:00:00Z",
        "destination": "LAX",
        "flightNumber": "TK201",
        "source": "JFK",
        "status": "On Time",
        "flightType": "Arrival"
    },
    {
        "airline": "Air India",
        "departureTime": "2024-08-01T10:30:00Z",
        "destination": "JFK",
        "flightNumber": "AB123",
        "gateNumber": "B12",
        "source": "SFO",
        "status": "On Time",
        "flightType": "Departure"
    },
    {
        "airline": "Ethiad Airways",
        "departureTime": "2024-08-01T14:00:00Z",
        "destination": "ORD",
        "flightNumber": "CD456",
        "gateNumber": "C8",
        "source": "LAX",
        "status": "Delayed",
        "flightType": "Departure"
    },
    {
        "airline": "Emirats Airline",
        "departureTime": "2024-08-01T16:45:00Z",
        "destination": "DFW",
        "flightNumber": "EF789",
        "gateNumber": "D5",
        "source": "SEA",
        "status": "On Time",
        "flightType": "Departure"
    }
]
"""
notifications = [
    {
        "flightNumber": "AA101",
        "message": "Flight AA101 is on time. Departure at 10:00 AM from JFK.",
        "timestamp": "2024-07-27T08:00:00Z"
    }
]
"""



async def populate_db():
    #db['users'].insert_many(users)
    db['flights'].insert_many(flights)
    #db['notifications'].insert_many(notifications)
    print("Database populated with sample data.")

if __name__ == "__main__":
    asyncio.run(populate_db())