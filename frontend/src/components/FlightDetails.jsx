

export const FlightDetails = () => {
  // const flight = {
  //   departure: {
  //     airport: "SFO",
  //     time: "10:30 AM",
  //   },
  //   arrival: {
  //     airport: "JFK",
  //     time: "5:45 PM",
  //   },
  //   flightNumber: "AB123",
  //   gate: "B12",
  //   status: "On Time",
  //   duration: "7h 15m",
  // };

  return (
    <div className="mt-6 px-5 py-6 ">
      {/* Card */}
      <div className="rounded-lg border border-black bg-card text-card-foreground shadow-sm"> 
        {/* Card Header */}
        <div className="flex flex-col space-y-1.5 p-6">
          {/* Card Title */}
          <div>
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              Flight Details
            </h3>
          </div>
        </div>
        {/* Card Content */}
        <div className="p-6 pt-0">

        <div className="grid gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Departure</div>
                    <div className="flex items-center gap-2">
                      <div className="text-2xl font-medium">SFO</div>
                      <div className="text-sm text-muted-foreground">10:30 AM</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Arrival</div>
                    <div className="flex items-center gap-2">
                      <div className="text-2xl font-medium">JFK</div>
                      <div className="text-sm text-muted-foreground">5:45 PM</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">Flight Number</div>
                    <div className="font-medium">AB123</div>
                  </div>
                  <div className="bg-green-500 px-2 py-1 rounded-md text-green-50 text-xs font-medium">On Time</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">Gate</div>
                    <div className="font-medium">B12</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Duration</div>
                    <div className="font-medium">7h 15m</div>
                  </div>
                </div>
                <hr className="bg-black"/>
                <div className="flex items-center justify-between">
                <button className="bg-gray-200 text-black py-2 px-4 rounded-md mb-4 lg:mb-0 hover:bg-gray-300">View Updates</button>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Notify Me</button>
                </div>
              </div>
        </div>


      </div>
    </div>
  );
};

// function Temp (){

//   return <div className="bg-white border border-black rounded-lg p-6 shadow-sm w-full">
//   <h2 className="text-xl font-bold mb-6">Flight Details</h2>
//   <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
//     <div className="flex flex-col items-start mb-6 lg:mb-0">
//       <div className="text-lg">
//         <span className="font-bold">Departure</span> {flight.departure.airport} <span className="text-gray-500">{flight.departure.time}</span>
//       </div>
//       <div className="text-lg">
//         <span className="font-bold">Arrival</span> {flight.arrival.airport} <span className="text-gray-500">{flight.arrival.time}</span>
//       </div>
//     </div>
//     <div className="flex flex-col items-end">
//       <div className="text-lg font-bold">{flight.flightNumber}</div>
//       <div className="text-lg text-gray-500">{flight.gate}</div>
//       <div
//         className={`text-sm px-2 py-1 rounded-full ${
//           flight.status === "On Time"
//             ? "bg-green-100 text-green-600"
//             : flight.status === "Delayed"
//             ? "bg-yellow-100 text-yellow-600"
//             : "bg-red-100 text-red-600"
//         }`}
//       >
//         {flight.status}
//       </div>
//       <div className="text-lg text-gray-500">{flight.duration}</div>
//     </div>
//   </div>
//   <div className="flex flex-col lg:flex-row justify-between items-center">
//     <button className="bg-gray-200 text-black py-2 px-4 rounded-md mb-4 lg:mb-0 hover:bg-gray-300">View Updates</button>
//     <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Notify Me</button>
//   </div>
// </div>
// }