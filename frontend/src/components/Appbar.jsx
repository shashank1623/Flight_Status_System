import { useState, useContext } from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const Appbar = ({ fetchFlightDetails }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchInput, setShowSearchInput] = useState(false);
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const toggleDropdown = () => setDropdownOpen(prev => !prev);

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    await fetchFlightDetails(searchQuery);
  };

  const toggleSearchInput = () => setShowSearchInput(prev => !prev);

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  const userName = "John Doe";
  const userInitial = userName.charAt(0);

  const renderSearchInput = (isMobile) => (
    <form
      onSubmit={handleSearchSubmit}
      className={`relative ${isMobile ? 'absolute top-12 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-lg' : 'hidden sm:flex'}`}
    >
      <input
        type="text"
        placeholder="Enter flight number..."
        value={searchQuery}
        onChange={handleSearchChange}
        className={`pl-10 pr-2 py-2 rounded-full focus:outline-none text-black ${isMobile ? 'w-64' : 'w-full'}`}
      />
      <FaSearch className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400`} />
    </form>
  );

  return (
    <header className="bg-blue-600 text-white py-4 px-6 flex items-center justify-between flex-wrap sm:flex-nowrap">
      <div className="flex items-center gap-2 sm:gap-4">
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
          className="w-6 h-6"
        >
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
        </svg>
        <h1 className="text-xl sm:text-2xl font-bold">Indigo</h1>
      </div>
      <div className="flex items-center gap-2 sm:gap-4 flex-wrap sm:flex-nowrap relative">
        {renderSearchInput(false)}
        <FaSearch
          className="sm:hidden w-6 h-6 cursor-pointer"
          onClick={toggleSearchInput}
        />
        {showSearchInput && renderSearchInput(true)}
        <div className="relative">
          <div
            className="hidden sm:flex items-center justify-center w-8 h-8 bg-white text-blue-600 rounded-full cursor-pointer"
            onClick={toggleDropdown}
          >
            {userInitial}
          </div>
          <FaUserCircle
            className="sm:hidden w-8 h-8 cursor-pointer"
            onClick={toggleDropdown}
          />
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
              <div className="p-4 border-b border-gray-200">
                <div className="font-bold">{userName}</div>
                <div className="text-gray-600 text-sm">john.doe@example.com</div>
              </div>
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => navigate("/profile")}
              >
                Profile
              </button>
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
