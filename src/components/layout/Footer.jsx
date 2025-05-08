import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center px-6 space-y-4">
        <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} Faiz Malha</p>

        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
          <div className="flex items-center space-x-2">
            <FaEnvelope size={24} />
            <a href="mailto:faizmalha@gmail.com" className="hover:text-red-400 transition">
                faizmalha@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;