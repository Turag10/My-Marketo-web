import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";
import nortonLogo from "../../assets/norton.png"; // your logo file
import mcafeeLogo from "../../assets/mcafee.png"; // your logo file

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white w-full">
      {/* Top Section */}
      <div className="py-12 px-6 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Column */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Marketo.</h2>
          <p className="text-gray-500">Got Question? Call us 24/7</p>
          <p className="text-xl font-bold text-gray-900 my-2">[80] 1017 197</p>
          <p className="text-gray-500 mb-4">
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
          <button className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-md flex items-center gap-2 hover:bg-yellow-500 transition-colors duration-300">
            <span>📍</span> View On Map
          </button>
        </div>

        {/* Middle Column - Safe Payments */}
        <div>
          <p className="text-gray-500 mb-2">We Using</p>
          <h3 className="font-bold text-gray-800 mb-4">Safe Payments</h3>
          <div className="flex space-x-6 opacity-70 mb-4">
            <span>Skrill</span>
            <span>PayPal</span>
            <span>American Express</span>
          </div>
          <p className="text-gray-500 mb-2">Secured by:</p>
          <div className="flex space-x-6">
            <img src={nortonLogo} alt="Norton" className="h-8 object-contain" />
            <img src={mcafeeLogo} alt="McAfee" className="h-8 object-contain" />
          </div>
        </div>

        {/* Our Stores */}
        <div>
          <h3 className="font-bold text-gray-800 mb-4">Our Stores</h3>
          <ul className="text-gray-600 space-y-2">
            {[
              "New York",
              "London SF",
              "Cockfosters BP",
              "Los Angeles",
              "Chicago",
              "Las Vegas",
              "Albarto",
            ].map((store, i) => (
              <li
                key={i}
                className="hover:text-yellow-500 transition-colors cursor-pointer"
              >
                {store}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links + Back To Top */}
        <div className="relative">
          <h3 className="font-bold text-gray-800 mb-4">Quick Links</h3>
          <ul className="text-gray-600 space-y-2 mb-6">
            {[
              "Support Center",
              "Term & Conditions",
              "Shipping",
              "Privacy Policy",
              "Help",
              "Products Return",
              "FAQS",
            ].map((link, i) => (
              <li
                key={i}
                className="hover:text-yellow-500 transition-colors cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>

       <button
  onClick={scrollToTop}
  className="absolute right-0 top-0 bg-yellow-400 text-gray-900 font-semibold px-3 py-20 rounded-md flex flex-col items-center justify-center gap-10 hover:bg-yellow-500 transition-colors duration-300"
>
  {/* Arrow */}
  <FaArrowUp className="text-2xl text-white" />

  {/* Vertical Text */}
  <span className="rotate-90 text-lg text-white">BACK TO TOP</span>
</button>


        </div>
      </div>

      {/* Bottom Yellow Bar */}
      <div className="bg-yellow-400 py-4 px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-800 text-sm mb-2 md:mb-0">
          © 2025 XpeedStudio All Rights Reserved
        </p>
        <div className="flex space-x-6 text-gray-800 text-lg">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-600 transition-colors"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-600 transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-600 transition-colors"
          >
            <FaPinterestP />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-600 transition-colors"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
