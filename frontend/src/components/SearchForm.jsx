
export const SearchForm = () => {
  return (
    <div className="bg-white border border-black rounded-lg p-4 shadow-sm">
      <h2 className="text-xl font-bold mb-4">Search Flights</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Enter departure airport"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="text"
            placeholder="Enter arrival airport"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="date"
            placeholder="dd/mm/yyyy"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="text"
            placeholder="Enter flight number"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="text"
            placeholder="Enter your name"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="text"
            placeholder="Enter your mobile or email"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Get Updates
        </button>
      </form>
    </div>
  );
};

