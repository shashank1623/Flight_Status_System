import { FlightCard } from "./FlightCard";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const FlightList = ({ title, flights, loading }) => {
  return (
    <div className="bg-white border border-black rounded-lg p-4 shadow-sm">
      <div className="flex flex-row gap-4">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        {title === "Arrivals" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M2 22h20"></path>
            <path d="M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M2 22h20"></path>
            <path d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"></path>
          </svg>
        )}
      </div>

      <div className="space-y-4">
        {loading ? (
          // Render skeletons while loading
          Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="p-4 border-b">
              <Skeleton height={20} width={`60%`} />
              <Skeleton height={20} width={`80%`} />
              <Skeleton height={20} width={`40%`} />
            </div>
          ))
        ) : (
          flights.map((flight) => (
            <FlightCard key={flight._id} flight={flight} />
          ))
        )}
      </div>
    </div>
  );
};
