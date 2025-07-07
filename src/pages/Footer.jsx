import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaFax } from "react-icons/fa";
import logo from "../assets/ekosharr.png";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8 border-t border-green-700 mt-8 text-sm">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left: Logo + Name */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Eko Sharr Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold text-white">Eko Sharr</span>
        </div>

        {/* Center: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 italic text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-orange-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-300">About Us</Link></li>
            <li><Link to="/products" className="hover:text-orange-300">Products</Link></li>
            <li><Link to="/contact" className="hover:text-orange-300">Contact</Link></li>
          </ul>
        </div>

        {/* Right: Map + Contact Info Side by Side */}
        <div>
          <h3 className="text-lg font-semibold mb-4 italic text-white">Our Location</h3>
          <div className="flex flex-col md:flex-row gap-4">
            {/* Map */}
            <div className="w-full md:w-1/2">
              <iframe
                title="Eko Sharr Map"
                src="https://maps.google.com/maps?q=42.031803162203104,20.994060484953714&z=15&output=embed"
                className="w-full h-32 rounded border border-white"
                loading="lazy"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="w-full md:w-1/2 flex flex-col justify-between text-sm text-white">
              <p>
                <strong>Eko Sharr</strong><br />
                Rruga "Deshmoret e Kombit"<br />
                Brezovicë, Kosovo
              </p>
              <p className="mt-2 flex items-center gap-2"><FaPhoneAlt /> +383 44 123 456</p>
              <p className="flex items-center gap-2"><FaFax /> +383 44 654 321</p>
              <div className="flex space-x-4 mt-3 text-lg">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 pt-4 text-center border-t border-green-800 text-xs text-gray-200">
        <p>
          &copy; {new Date().getFullYear()} Eko Sharr. All rights reserved.
        </p>
        <p>
          Designed and developed by{" "}
          <a
            href="https://www.lifelinedesign.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 underline"
          >
            Lifeline Design
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
