## Indigo Flight Status 2024 (Hack To Hire)

## Overview

The Flight Status and Notification System is a web application that allows users to search for flight details, view upcoming and outgoing flights, and receive notifications about their flight status on their mobile phones. This system is built using modern web technologies and follows a microservices architecture.

## Features

- **Flight Search**: Using flight numbers, users can search for specific flight details.
- **Flight Lists**: Displays lists of upcoming arrivals and departures.
- **Flight Details**: Provides detailed information about a specific flight.
- **Notifications**: Users can opt to receive notifications about flight status updates along with Gate numbers for departure and Baggage Carousel numbers for arrival passengers.
- **Authentication**: Signup and sign-in routes are used to prevent all the features from being unauthorized access without authentication.

# Tech Stack
- **Frontend**: 
  - React (Javascript)
  - Vite
  - Tailwind CSS
  - Dependencies:
    - `axios`: (HTTP client for making API requests)
    - `react`: Core library for building user interfaces
    - `react-dom`: Provides DOM-specific methods for React
    - `react-icons`: Library for including icons in React applications
    - `react-loading-skeleton`: Library for displaying loading placeholders
    - `react-responsive-carousel`: Carousel component for React
    - `react-router-dom`: Declarative routing for React applications

**Backend**:
  - Python (Flask)
  - Messaging: Twilio
  - Dependencies :
      - `bcrypt`:Password hashing
      - `Flask`: Web framework for Python
      - `Flask-Cors`: Handling Cross-Origin Resource Sharing (CORS)
      - `Flask-PyMongo`: Integration of MongoDB with Flask
      - `pyjwt`: Token generation and validation
      - `Jinja2`: Templating engine for Python
      - `pymongo`: MongoDB driver for Pyth
      - `requests`: HTTP library for making API requests
      - `twilio`: Sending SMS notifications
      - `werkzeug`: WSGI utility library for Python
      - `dnspython`: DNS toolkit for Python
      - `yarl`: URL parsing library
      - `click`: Command line interface creation toolkit
      - `python-dotenv`: Loading environment variables from a .env file
      - `urllib3`: HTTP client for Python
      - `aiohttp`: Asynchronous HTTP client/server framework
      - `aiosignal`: Signal dispatching for asyncio
      - `attrs`: Attribute management for Python classes


- **Database**: 
  - MongoDB


## Usage
### Searching for a Flight
- Enter the flight number in the search bar located in the `Appbar` component.
- The flight details will be displayed in the `FlightDetails` component on the `Home` page.

### Arrival and Departure Flights Display
- The `FlightList` component displays lists of upcoming arrivals and departures.
- These lists are updated periodically.

### Receiving Notifications
- Fill out the search form to receive flight updates on your mobile phones.

#### Landing Page Animation : <br/>
![image](https://github.com/user-attachments/assets/f9017a73-0e54-4fd5-8210-3b0642ca77f7) <br/>

#### Authentication : <br/>
![image](https://github.com/user-attachments/assets/a457d0e7-5267-493a-afb5-4e2750546864) <br/>

#### Home Page : <br/>
![image](https://github.com/user-attachments/assets/bd5a2fe3-fcda-42ea-9495-f9a2a302b89e) <br/>
![image](https://github.com/user-attachments/assets/2eb609fe-4f84-4d9d-9211-43bf90936196) <br/>

#### Flight Details: ( Seach By Flight Number and Notification Service Form of web Response) <br/>
![image](https://github.com/user-attachments/assets/d9404a0a-4a7a-421e-a8d7-2563a65018a6) <br/>

#### Mobile SMS Received By Passengers (For Arrival ): <br/>
![WhatsApp Image 2024-07-30 at 12 14 37 AM](https://github.com/user-attachments/assets/cb8ca8c6-6e78-4690-881c-d99eb1e82774) <br/>

#### Mobile SMS Received By Passengers (For Departure ): <br/>
![WhatsApp Image 2024-07-30 at 10 14 38 AM](https://github.com/user-attachments/assets/8eb348de-0c20-470b-8b2d-0ee6f2d57fbf)

#### DEMO YouTube Video :
[Watch the video](https://youtu.be/AnD48oW_GnY)

## Contact
For any feedback, Please Reach out to me:
- **Name** : Shashank Bhardwaj
- **Email** : shashankbhardwaj2030@gmail.com
- **Linkedin** : <a href="https://www.linkedin.com/in/shashank-bhardwaj-1a92b9213/" target="_blank">Shashank Bhardwaj</a>
- **Twitter** : <a href="https://x.com/theghost1623" target="_blank">Shashank Bhardwaj</a>

Made by ❤️ @the_ghost aka Shashank Bhardwaj
