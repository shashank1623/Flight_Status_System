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
users = [
    {
        "name": "Shashank Bhardwaj",
        "email": "shashankbhardwaj2030@gmail.com",
        "password": "Hello@123"  # Replace with actual hashed password
    }
]

flights = [
    {
        "flightNumber": "AA101",
        "airline": "American Airlines",
        "source": "JFK",
        "destination": "LAX",
        "departureTime": "2024-07-27T10:00:00Z",
        "arrivalTime": "2024-07-27T13:00:00Z",
        "status": "On Time"
    }
]

notifications = [
    {
        "flightNumber": "AA101",
        "message": "Flight AA101 is on time. Departure at 10:00 AM from JFK.",
        "timestamp": "2024-07-27T08:00:00Z"
    }
]

async def populate_db():
    db['users'].insert_many(users)
    db['flights'].insert_many(flights)
    db['notifications'].insert_many(notifications)
    print("Database populated with sample data.")

if __name__ == "__main__":
    asyncio.run(populate_db())