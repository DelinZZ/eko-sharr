import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/ekosharr.png";
import "./pp.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left: Logo + Brand */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Eko Sharr Logo" className="h-10" />
          <span className="text-green-800 font-bold text-xl">Eko Sharr</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li><Link to="/" className="hover:text-green-700">Home</Link></li>
          <li><Link to="/about" className="hover:text-green-700">About</Link></li>
          <li><Link to="/products" className="hover:text-green-700">Products</Link></li>
          <li><Link to="/contact" className="hover:text-green-700">Contact</Link></li>
        </ul>

        {/* Search bar */}
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
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pt-3 pb-4 space-y-3 font-medium text-gray-700">
          <Link to="/" className="block hover:text-green-700" onClick={handleLinkClick}>Home</Link>
          <Link to="/about" className="block hover:text-green-700" onClick={handleLinkClick}>About</Link>
          <Link to="/products" className="block hover:text-green-700" onClick={handleLinkClick}>Products</Link>
          <Link to="/contact" className="block hover:text-green-700" onClick={handleLinkClick}>Contact</Link>
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
