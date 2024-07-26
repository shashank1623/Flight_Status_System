import { Appbar } from "../components/Appbar";
import CarouselComponent from "../components/CarouselComponent";
import { FlightDetails } from "../components/FlightDetails";
import { FlightList } from "../components/FlightList";
import { Footer } from "../components/Footer";
import { SearchForm } from "../components/SearchForm";
export const Home = () => {
  const upcomingFlights = [
    { number: "Flight 123", route: "SFO to JFK", status: "On Time", time: "10:30 AM" },
    { number: "Flight 456", route: "LAX to ORD", status: "Delayed", time: "11:45 AM" },
    { number: "Flight 456", route: "LAX to ORD", status: "Delayed", time: "11:45 AM" },
    { number: "Flight 456", route: "LAX to ORD", status: "Delayed", time: "11:45 AM" },
  ];

  const outgoingFlights = [
    { number: "Flight 789", route: "JFK to LHR", status: "Cancelled", time: "11:00 AM" },
    { number: "Flight 321", route: "SFO to LAX", status: "On Time", time: "3:45 PM" },
    { number: "Flight 789", route: "JFK to LHR", status: "Cancelled", time: "11:00 AM" },
    { number: "Flight 321", route: "SFO to LAX", status: "On Time", time: "3:45 PM" },
  ];


  return (
    <div>
      <div>
        <Appbar />
      </div>

      <CarouselComponent />

      <div>
      <div className="p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Flight Status</h1>
      </header>
      <div className="flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-1/3">
          <FlightList title="Upcoming Flights" flights={upcomingFlights} />
        </div>
        <div className="w-full lg:w-1/3">
          <FlightList title="Outgoing Flights" flights={outgoingFlights} />
        </div>
        <div className="w-full lg:w-1/3">
          <SearchForm />
        </div>
      </div>
    </div>
      </div>

      {/* Flight Specfic Details */}
      <div>
      <FlightDetails/>
      </div>

      {/* footer */}
        <div>
            <Footer/>
        </div>
    </div>
  );
};
