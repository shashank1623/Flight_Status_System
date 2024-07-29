
export const FlightDetails = ({ flight }) => {
  if (!flight) return null;

  const isArrival = flight.flightType === 'Arrival';

  return (
    <div className="mt-6 px-5 py-6">
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
                  <div className="text-2xl font-medium">{flight.source}</div>
                  <div className="text-sm text-muted-foreground">{new Date(flight.departureTime).toLocaleTimeString()}</div>
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Arrival</div>
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-medium">{flight.destination}</div>
                  <div className="text-sm text-muted-foreground">{new Date(flight.arrivalTime).toLocaleTimeString()}</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-muted-foreground">Flight Number</div>
                <div className="font-medium">{flight.flightNumber}</div>
              </div>
              <div className={`px-2 py-1 rounded-md text-xs font-medium ${flight.status === 'On Time' ? 'bg-green-500 text-green-50' : 'bg-red-500 text-red-50'}`}>
                {flight.status}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-muted-foreground">
                  {isArrival ? "Baggage Carousel" : "Gate"}
                </div>
                <div className="font-medium">
                  {isArrival ? flight.baggageCarousel : flight.gate}
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Duration</div>
                <div className="font-medium">{calculateDuration(flight.departureTime, flight.arrivalTime)}</div>
              </div>
            </div>
            <hr className="bg-black" />
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

const calculateDuration = (departureTime, arrivalTime) => {
  const departure = new Date(departureTime);
  const arrival = new Date(arrivalTime);
  const duration = new Date(arrival - departure);
  const hours = duration.getUTCHours();
  const minutes = duration.getUTCMinutes();
  return `${hours}h ${minutes}m`;
};
