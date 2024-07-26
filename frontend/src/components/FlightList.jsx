import React from "react";
import {FlightCard} from "./FlightCard";

export const FlightList = ({ title, flights }) => {
  return (
    <div className="bg-white border border-black rounded-lg p-4 shadow-sm">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="space-y-4">
        {flights.map((flight) => (
          <FlightCard key={flight.number} flight={flight} />
        ))}
      </div>
    </div>
  );
};


