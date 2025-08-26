import React from "react";
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from "react-icons/fa";
import { FiTruck, FiGlobe } from "react-icons/fi";

const TopHeader = () => {
  return (
    <div className="w-full bg-gray-100 text-gray-800 text-base">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-3 space-y-3 md:space-y-0">
        
        {/* Left Section */}
        <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-2 md:space-y-0">
          <div className="flex items-center gap-2">
            <FiTruck className="text-2xl text-gray-700" />
            <span className="font-medium">Free Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <FiGlobe className="text-2xl text-gray-700" />
            <span className="font-medium">Returns Policy</span>
          </div>
        </div>

        {/* Center Section */}
        <div className="flex items-center gap-4">
          <span className="hidden md:inline font-medium">Follow Us</span>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-yellow-500 transition-colors text-2xl">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-yellow-500 transition-colors text-2xl">
            <FaTwitter />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="hover:text-yellow-500 transition-colors text-2xl">
            <FaPinterestP />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-yellow-500 transition-colors text-2xl">
            <FaInstagram />
          </a>
        </div>

        {/* Right Section */}
        <div>
          <a href="/login" className="hover:text-yellow-500 transition-colors font-medium text-base">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
