import React from "react";
import { FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-green-800 mb-3">Get in Touch</h1>
          <p className="text-gray-700 max-w-lg mx-auto">
            Have questions or want to connect? Here’s how you can reach us.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-center">
          <div className="flex flex-col items-center space-y-3 p-6 border border-blue-300 rounded-lg shadow-sm hover:shadow-md transition">
            <FaEnvelope className="text-green-700 text-4xl" />
            <h2 className="text-xl font-semibold text-green-800">Email</h2>
            <a href="mailto:info@ekosharr.com" className="text-blue-600 hover:underline">
              info@ekosharr.com
            </a>
          </div>

          <div className="flex flex-col items-center space-y-3 p-6 border border-blue-300 rounded-lg shadow-sm hover:shadow-md transition">
            <FaPhone className="text-green-700 text-4xl" />
            <h2 className="text-xl font-semibold text-green-800">Phone</h2>
            <a href="tel:+1234567890" className="text-blue-600 hover:underline">
              +1 (234) 567-890
            </a>
          </div>

          <div className="flex flex-col items-center space-y-3 p-6 border border-blue-300 rounded-lg shadow-sm hover:shadow-md transition">
            <FaFacebookF className="text-green-700 text-4xl" />
            <h2 className="text-xl font-semibold text-green-800">Facebook</h2>
            <a
              href="https://facebook.com/ekosharr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              facebook.com/ekosharr
            </a>
          </div>

          <div className="flex flex-col items-center space-y-3 p-6 border border-blue-300 rounded-lg shadow-sm hover:shadow-md transition">
            <FaInstagram className="text-green-700 text-4xl" />
            <h2 className="text-xl font-semibold text-green-800">Instagram</h2>
            <a
              href="https://instagram.com/ekosharr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              @ekosharr
            </a>
          </div>

          <div className="flex flex-col items-center space-y-3 p-6 border border-blue-300 rounded-lg shadow-sm hover:shadow-md transition sm:col-span-2">
            <FaTwitter className="text-green-700 text-4xl" />
            <h2 className="text-xl font-semibold text-green-800">Twitter</h2>
            <a
              href="https://twitter.com/ekosharr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              @ekosharr
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
