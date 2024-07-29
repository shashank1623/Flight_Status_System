import React from "react";
import { FaPlane } from "react-icons/fa";

export const FlightCard = ({ flight }) => {
  const { airline, arrivalTime, departureTime, destination, flightNumber, flightType, source, status } = flight;

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center">
        <FaPlane className="text-gray-500" />
        <div className="ml-3">
          <div className="text-lg font-semibold">{flightNumber}</div>
          <div className="text-gray-500">{`${source} to ${destination}`}</div>
          <div className="text-gray-500">{`Airline: ${airline}`}</div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <div
          className={`text-sm px-2 py-1 rounded-full ${
            status === "On Time"
              ? "bg-green-100 text-green-800"
              : status === "Delayed"
              ? "bg-red-100 text-red-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {status}
        </div>
        {flightType === "Arrival" ? (
          <div className="text-gray-700">Arrives at: {new Date(arrivalTime).toLocaleTimeString()}</div>
        ) : (
          <div className="text-gray-700">Departs at: {new Date(departureTime).toLocaleTimeString()}</div>
        )}
      </div>
    </div>
  );
};
