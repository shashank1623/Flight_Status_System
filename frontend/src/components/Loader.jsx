import React, { useEffect } from 'react';
import logo from '../assets/IndiGo_logo_2x.png';

const Loader = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById('loader').style.display = 'none';
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="loader" className="flex flex-col items-center justify-center h-screen bg-white">
      <img src={logo} alt="IndiGo Logo" className="w-64 mb-4" />
      <div className="relative w-64 h-2 bg-gray-300 rounded">
        <div className="absolute top-0 left-0 h-full bg-blue-500 animate-load rounded"></div>
      </div>
    </div>
  );
};

export default Loader;

