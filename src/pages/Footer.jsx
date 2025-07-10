import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white text-center py-4 mt-8">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Eko Sharr. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
