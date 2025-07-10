import React, { useState } from "react";
import logo from "./assets/ekosharr.png";
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false); // Close mobile menu on link click
  };

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-4 py-3 flex items-center justify-between">
        {/* Left: Logo + Brand */}
        <div className="flex items-center">
          <img src={logo} alt="Eko Sharr Logo" className="h-10 mr-3" />
          <span className="text-green-800 font-bold text-xl">Eko Sharr</span>
        </div>

        {/* Center: Menu (visible on md+) */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li><a href="#home" className="hover:text-green-700">Home</a></li>
          <li><a href="#about" className="hover:text-green-700">About</a></li>
          <li><a href="#products" className="hover:text-green-700">Products</a></li>
          <li><a href="#contact" className="hover:text-green-700">Contact</a></li>
        </ul>

        {/* Right: Search input (visible on md+) */}
        <div className="hidden md:flex">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu (visible when menuOpen is true) */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-3 space-y-3 font-medium text-gray-700 transition-all duration-300">
          <a href="#home" className="block hover:text-green-700" onClick={handleLinkClick}>Home</a>
          <a href="#about" className="block hover:text-green-700" onClick={handleLinkClick}>About</a>
          <a href="#products" className="block hover:text-green-700" onClick={handleLinkClick}>Products</a>
          <a href="#contact" className="block hover:text-green-700" onClick={handleLinkClick}>Contact</a>
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      )}
    </div>
  );
}

export default App;
