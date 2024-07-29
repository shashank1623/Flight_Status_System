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

flights = [
    {"airline": "Indigo", "arrivalTime": "2024-07-28T13:00:00Z", "departureTime": "2024-07-28T10:00:00Z", "destination": "HYD", "flightNumber": "6E402", "flightType": "Arrival", "source": "DED", "status": "On Time", "baggageCarousel": "5"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T15:00:00Z", "departureTime": "2024-07-28T11:30:00Z", "destination": "DEL", "flightNumber": "6E203", "flightType": "Arrival", "source": "BLR", "status": "On Time", "baggageCarousel": "2"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T14:30:00Z", "departureTime": "2024-07-28T10:45:00Z", "destination": "CCU", "flightNumber": "6E405", "flightType": "Arrival", "source": "PNQ", "status": "Delayed", "baggageCarousel": "8"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T12:15:00Z", "departureTime": "2024-07-28T09:00:00Z", "destination": "MAA", "flightNumber": "6E110", "flightType": "Arrival", "source": "AMD", "status": "On Time", "baggageCarousel": "6"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T16:45:00Z", "departureTime": "2024-07-28T12:30:00Z", "destination": "BOM", "flightNumber": "6E899", "flightType": "Arrival", "source": "HYD", "status": "On Time", "baggageCarousel": "3"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T10:30:00Z", "departureTime": "2024-07-28T07:15:00Z", "destination": "DEL", "flightNumber": "6E315", "flightType": "Arrival", "source": "JAI", "status": "On Time", "baggageCarousel": "7"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T19:00:00Z", "departureTime": "2024-07-28T15:00:00Z", "destination": "BLR", "flightNumber": "6E581", "flightType": "Arrival", "source": "IXC", "status": "On Time", "baggageCarousel": "4"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T17:30:00Z", "departureTime": "2024-07-28T14:00:00Z", "destination": "DEL", "flightNumber": "6E410", "flightType": "Arrival", "source": "IXB", "status": "Delayed", "baggageCarousel": "1"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T08:45:00Z", "departureTime": "2024-07-28T05:30:00Z", "destination": "BOM", "flightNumber": "6E712", "flightType": "Arrival", "source": "CCU", "status": "On Time", "baggageCarousel": "9"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T11:30:00Z", "departureTime": "2024-07-28T08:15:00Z", "destination": "HYD", "flightNumber": "6E122", "flightType": "Arrival", "source": "BLR", "status": "On Time", "baggageCarousel": "10"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T20:15:00Z", "departureTime": "2024-07-28T16:45:00Z", "destination": "DEL", "flightNumber": "6E245", "flightType": "Arrival", "source": "SXR", "status": "On Time", "baggageCarousel": "11"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T09:00:00Z", "departureTime": "2024-07-28T05:30:00Z", "destination": "DEL", "flightNumber": "6E610", "flightType": "Arrival", "source": "GOI", "status": "On Time", "baggageCarousel": "12"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T22:00:00Z", "departureTime": "2024-07-28T18:30:00Z", "destination": "BOM", "flightNumber": "6E908", "flightType": "Arrival", "source": "MAA", "status": "On Time", "baggageCarousel": "13"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T12:00:00Z", "departureTime": "2024-07-28T08:30:00Z", "destination": "DEL", "flightNumber": "6E509", "flightType": "Arrival", "source": "PNQ", "status": "On Time", "baggageCarousel": "14"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T14:00:00Z", "departureTime": "2024-07-28T10:30:00Z", "destination": "CCU", "flightNumber": "6E145", "flightType": "Arrival", "source": "IXA", "status": "Delayed", "baggageCarousel": "15"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T11:00:00Z", "departureTime": "2024-07-28T07:45:00Z", "destination": "BOM", "flightNumber": "6E403", "flightType": "Arrival", "source": "JDH", "status": "On Time", "baggageCarousel": "16"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T18:30:00Z", "departureTime": "2024-07-28T15:00:00Z", "destination": "HYD", "flightNumber": "6E299", "flightType": "Arrival", "source": "ATQ", "status": "On Time", "baggageCarousel": "17"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T23:30:00Z", "departureTime": "2024-07-28T19:15:00Z", "destination": "DEL", "flightNumber": "6E534", "flightType": "Arrival", "source": "IXR", "status": "On Time", "baggageCarousel": "18"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T10:00:00Z", "departureTime": "2024-07-28T06:45:00Z", "destination": "BOM", "flightNumber": "6E225", "flightType": "Arrival", "source": "BHO", "status": "Delayed", "baggageCarousel": "19"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T09:45:00Z", "departureTime": "2024-07-28T06:30:00Z", "destination": "DEL", "flightNumber": "6E817", "flightType": "Arrival", "source": "KQH", "status": "On Time", "baggageCarousel": "20"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T13:45:00Z", "departureTime": "2024-07-28T10:15:00Z", "destination": "HYD", "flightNumber": "6E321", "flightType": "Arrival", "source": "RPR", "status": "On Time", "baggageCarousel": "21"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T17:00:00Z", "departureTime": "2024-07-28T13:30:00Z", "destination": "BOM", "flightNumber": "6E715", "flightType": "Arrival", "source": "JAB", "status": "Delayed", "baggageCarousel": "22"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T08:00:00Z", "departureTime": "2024-07-28T04:45:00Z", "destination": "CCU", "flightNumber": "6E612", "flightType": "Arrival", "source": "BLR", "status": "On Time", "baggageCarousel": "23"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T21:00:00Z", "departureTime": "2024-07-28T17:30:00Z", "destination": "DEL", "flightNumber": "6E408", "flightType": "Arrival", "source": "TRZ", "status": "On Time", "baggageCarousel": "24"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T16:00:00Z", "departureTime": "2024-07-28T12:30:00Z", "destination": "BOM", "flightNumber": "6E155", "flightType": "Arrival", "source": "MAA", "status": "Delayed", "baggageCarousel": "25"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T12:00:00Z", "departureTime": "2024-07-28T09:00:00Z", "destination": "DEL", "flightNumber": "6E403", "flightType": "Departure", "source": "HYD", "status": "On Time", "gateNumber": "A12"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T18:00:00Z", "departureTime": "2024-07-28T14:00:00Z", "destination": "BOM", "flightNumber": "6E203", "flightType": "Departure", "source": "DEL", "status": "On Time", "gateNumber": "B3"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T16:00:00Z", "departureTime": "2024-07-28T12:00:00Z", "destination": "CCU", "flightNumber": "6E406", "flightType": "Departure", "source": "BLR", "status": "Delayed", "gateNumber": "C5"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T10:00:00Z", "departureTime": "2024-07-28T07:00:00Z", "destination": "MAA", "flightNumber": "6E155", "flightType": "Departure", "source": "HYD", "status": "On Time", "gateNumber": "D4"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T14:30:00Z", "departureTime": "2024-07-28T10:30:00Z", "destination": "BOM", "flightNumber": "6E900", "flightType": "Departure", "source": "DEL", "status": "On Time", "gateNumber": "E7"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T09:00:00Z", "departureTime": "2024-07-28T06:00:00Z", "destination": "DEL", "flightNumber": "6E316", "flightType": "Departure", "source": "JAI", "status": "On Time", "gateNumber": "F8"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T17:00:00Z", "departureTime": "2024-07-28T13:00:00Z", "destination": "BLR", "flightNumber": "6E582", "flightType": "Departure", "source": "HYD", "status": "On Time", "gateNumber": "G6"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T15:30:00Z", "departureTime": "2024-07-28T11:30:00Z", "destination": "DEL", "flightNumber": "6E411", "flightType": "Departure", "source": "IXB", "status": "Delayed", "gateNumber": "H9"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T07:45:00Z", "departureTime": "2024-07-28T04:45:00Z", "destination": "BOM", "flightNumber": "6E713", "flightType": "Departure", "source": "CCU", "status": "On Time", "gateNumber": "I10"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T11:30:00Z", "departureTime": "2024-07-28T08:30:00Z", "destination": "HYD", "flightNumber": "6E123", "flightType": "Departure", "source": "BLR", "status": "On Time", "gateNumber": "J12"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T20:00:00Z", "departureTime": "2024-07-28T16:00:00Z", "destination": "DEL", "flightNumber": "6E246", "flightType": "Departure", "source": "SXR", "status": "On Time", "gateNumber": "K5"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T08:00:00Z", "departureTime": "2024-07-28T04:30:00Z", "destination": "DEL", "flightNumber": "6E611", "flightType": "Departure", "source": "GOI", "status": "On Time", "gateNumber": "L4"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T22:30:00Z", "departureTime": "2024-07-28T18:00:00Z", "destination": "BOM", "flightNumber": "6E909", "flightType": "Departure", "source": "MAA", "status": "On Time", "gateNumber": "M7"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T12:00:00Z", "departureTime": "2024-07-28T08:00:00Z", "destination": "DEL", "flightNumber": "6E510", "flightType": "Departure", "source": "PNQ", "status": "On Time", "gateNumber": "N6"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T14:00:00Z", "departureTime": "2024-07-28T10:00:00Z", "destination": "CCU", "flightNumber": "6E814", "flightType": "Departure", "source": "IXA", "status": "Delayed", "gateNumber": "O5"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T11:30:00Z", "departureTime": "2024-07-28T07:00:00Z", "destination": "BOM", "flightNumber": "6E404", "flightType": "Departure", "source": "JDH", "status": "On Time", "gateNumber": "P3"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T19:00:00Z", "departureTime": "2024-07-28T15:00:00Z", "destination": "BOM", "flightNumber": "6E816", "flightType": "Departure", "source": "JAB", "status": "Delayed", "gateNumber": "Q2"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T08:00:00Z", "departureTime": "2024-07-28T05:00:00Z", "destination": "CCU", "flightNumber": "6E613", "flightType": "Departure", "source": "BLR", "status": "On Time", "gateNumber": "R1"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T21:00:00Z", "departureTime": "2024-07-28T17:00:00Z", "destination": "DEL", "flightNumber": "6E409", "flightType": "Departure", "source": "TRZ", "status": "On Time", "gateNumber": "S7"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T16:00:00Z", "departureTime": "2024-07-28T12:30:00Z", "destination": "BOM", "flightNumber": "6E716", "flightType": "Departure", "source": "MAA", "status": "Delayed", "gateNumber": "T4"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T10:00:00Z", "departureTime": "2024-07-28T07:00:00Z", "destination": "DEL", "flightNumber": "6E404", "flightType": "Departure", "source": "HYD", "status": "On Time", "gateNumber": "U6"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T12:45:00Z", "departureTime": "2024-07-28T09:15:00Z", "destination": "BOM", "flightNumber": "6E816", "flightType": "Departure", "source": "JAI", "status": "On Time", "gateNumber": "V5"},
    {"airline": "Indigo", "arrivalTime": "2024-07-28T15:00:00Z", "departureTime": "2024-07-28T11:30:00Z", "destination": "DEL", "flightNumber": "6E512", "flightType": "Departure", "source": "BLR", "status": "Delayed", "gateNumber": "W8"}
]
async def populate_db():
    #db['users'].insert_many(users)
    db['flights'].insert_many(flights)
    #db['notifications'].insert_many(notifications)
    print("Database populated with sample data.")

if __name__ == "__main__":
    asyncio.run(populate_db())