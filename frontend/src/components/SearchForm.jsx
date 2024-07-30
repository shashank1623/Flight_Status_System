import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { BACKEND_URL } from "../config";
import { Spinner } from "./Spinner";

export const SearchForm = ({setFlightDetails}) => {
  const { token } = useContext(AuthContext); // Access token from context
  const [formData, setFormData] = useState({
    departure_airport: "",
    arrival_airport: "",
    departure_date: "",
    flight_number: "",
    name: "",
    contact: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BACKEND_URL}/search`, {
        method: 'POST',
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      setFlightDetails(data.flightData);  // Pass the flight data to the parent component
      alert("You will soon receive updates about the flight status.");
    } catch (error) {
      console.error("Error searching flights:", error);
      alert("There was an error. Please try again.");
    }finally{
      setLoading(false);
    }
  };
  
  return (
    <div className="bg-white border border-black rounded-lg p-4 shadow-sm">
    <h2 className="text-xl font-bold mb-4">Search Flights</h2>
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="departure_airport"
          value={formData.departure_airport}
          onChange={handleChange}
          placeholder="Enter Destination ..."
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="text"
          name="arrival_airport"
          value={formData.arrival_airport}
          onChange={handleChange}
          placeholder="Enter source ..."
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="date"
          name="departure_date"
          value={formData.departure_date}
          onChange={handleChange}
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="text"
          name="flight_number"
          value={formData.flight_number}
          onChange={handleChange}
          placeholder="Enter flight number"
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="Enter your mobile or email"
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        {loading ? <Spinner /> : "Get Updates"}
      </button>
    </form>
  </div>
  );
};

