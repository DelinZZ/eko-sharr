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
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Eko Sharr Logo" className="h-10 w-auto" />
          <span className="text-green-800 font-bold text-xl">Eko Sharr</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 font-medium text-gray-700">
            <li>
              <Link to="/" className="hover:text-green-700">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-green-700">About</Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-green-700">Products</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-700">Contact</Link>
            </li>
          </ul>

          {/* Desktop Search */}
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="ml-4 border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 px-4 pb-4 space-y-4">
          <Link to="/" onClick={handleLinkClick} className="block font-medium text-gray-700 hover:text-green-700">Home</Link>
          <Link to="/about" onClick={handleLinkClick} className="block font-medium text-gray-700 hover:text-green-700">About</Link>
          <Link to="/products" onClick={handleLinkClick} className="block font-medium text-gray-700 hover:text-green-700">Products</Link>
          <Link to="/contact" onClick={handleLinkClick} className="block font-medium text-gray-700 hover:text-green-700">Contact</Link>
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      )}
    </nav>
  );
}
 <div className="bg-green-500 text-white text-3xl p-6">Tailwind is working!</div>

export default Navbar;
