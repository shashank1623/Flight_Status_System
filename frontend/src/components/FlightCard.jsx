import React from "react";
import { FaPlane } from "react-icons/fa";

export const FlightCard = ({ flight }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center">
        <FaPlane className="text-gray-500" />
        <div className="ml-3">
          <div className="text-lg font-semibold">{flight.number}</div>
          <div className="text-gray-500">{flight.route}</div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div
          className={`text-sm px-2 py-1 rounded-full ${
            flight.status === "On Time"
              ? "bg-green-100 text-green-600"
              : flight.status === "Delayed"
              ? "bg-yellow-100 text-yellow-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {flight.status}
        </div>
        <div className="text-gray-500">{flight.time}</div>
      </div>
    </div>
  );
};
