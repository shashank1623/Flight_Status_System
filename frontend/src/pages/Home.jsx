import { useState, useEffect, useContext } from "react";
import { Appbar } from "../components/Appbar";
import CarouselComponent from "../components/CarouselComponent";
import { FlightDetails } from "../components/FlightDetails";
import { FlightList } from "../components/FlightList";
import { Footer } from "../components/Footer";
import { SearchForm } from "../components/SearchForm";
import { AuthContext } from "../context/AuthContext";
import { BACKEND_URL } from "../config";

export const Home = () => {
  const [allUpcomingFlights, setAllUpcomingFlights] = useState([]);
  const [allOutgoingFlights, setAllOutgoingFlights] = useState([]);
  const [upcomingFlights, setUpcomingFlights] = useState([]);
  const [outgoingFlights, setOutgoingFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useContext(AuthContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flightDetails, setFlightDetails] = useState(null);  // State for flight details

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/flights`, {
          method: 'GET',
          headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        const sortedUpcoming = data
          .filter(flight => flight.flightType === 'Arrival')
          .sort((a, b) => new Date(a.arrivalTime) - new Date(b.arrivalTime));
        const sortedOutgoing = data
          .filter(flight => flight.flightType === 'Departure')
          .sort((a, b) => new Date(a.departureTime) - new Date(b.departureTime));
        setAllUpcomingFlights(sortedUpcoming);
        setAllOutgoingFlights(sortedOutgoing);
        setUpcomingFlights(sortedUpcoming.slice(0, 5));
        setOutgoingFlights(sortedOutgoing.slice(0, 5));
      } catch (error) {
        console.error("Error fetching flights:", error);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchFlights();
    }
  }, [token]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 5) % allUpcomingFlights.length;
        setUpcomingFlights(allUpcomingFlights.slice(newIndex, newIndex + 5));
        setOutgoingFlights(allOutgoingFlights.slice(newIndex, newIndex + 5));
        return newIndex;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [allUpcomingFlights, allOutgoingFlights]);

  // Handler function to fetch flight details
  const fetchFlightDetails = async (flightNumber) => {
    try {
      const response = await fetch(`${BACKEND_URL}/flights/${flightNumber}`, {
        method: 'GET',
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setFlightDetails(data);
    } catch (error) {
      console.error("Error fetching flight details:", error);
    }
  };

  return (
    <div>
      <div>
        <Appbar fetchFlightDetails={fetchFlightDetails} />
      </div>

      <CarouselComponent />

      <div className="p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Flight Status</h1>
        </header>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/3">
            <FlightList title="Arrivals" flights={upcomingFlights} loading={loading} />
          </div>
          <div className="w-full lg:w-1/3">
            <FlightList title="Departure" flights={outgoingFlights} loading={loading} />
          </div>
          <div className="w-full lg:w-1/3">
          <SearchForm setFlightDetails={setFlightDetails} />
          </div>
        </div>
      </div>

      {/* Flight Specific Details */}
      <div>
        {flightDetails && <FlightDetails flight={flightDetails} />}
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};
