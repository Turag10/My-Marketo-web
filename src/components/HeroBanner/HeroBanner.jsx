import React, { useState, useEffect } from "react";

import slide1 from "../../assets/model 1.jpg";
import slide2 from "../../assets/model 2.png";
import slide3 from "../../assets/model3.jpg";
import promo1 from "../../assets/promo1.png";
import promo2 from "../../assets/promo2.png";

const HeroBanner = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [entered, setEntered] = useState(false); // run entry animation once

  const bannerData = [
    {
      title: "SHOP WISE WITH PRICE COMPARISONS",
      subtitle: "Get 50% Off",
      image: slide1,
      buttonText: "VIEW COLLECTION",
      buttonText2: "CATEGORIES",
    },
    {
      title: "TOP PICKS IN POPULAR TECH & MORE",
      subtitle: "Hurry, these deals will be gone in a FLASH",
      image: slide2,
      buttonText: "SHOP NOW",
      buttonText2: "BROWSE DEALS",
    },
    {
      title: "ENJOY THE SECURITY",
      subtitle: "Amazing offers for security systems",
      image: slide3,
      buttonText: "EXPLORE",
      buttonText2: "LEARN MORE",
    },
  ];

  // Auto rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % bannerData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [bannerData.length]);

  // Trigger first-load animation after initial paint
  useEffect(() => {
    const raf = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleTabClick = (index) => setActiveTab(index);

  // helpers for first-load only transitions
  const baseTransit = "transition-all ease-out will-change-transform";
  const slow = "duration-[1200ms]"; // nice & slow
  const shown = "opacity-100 translate-x-0";
  const fromRight = "opacity-0 translate-x-24";   // moves right ➜ left
  const fromLeft  = "opacity-0 -translate-x-24";  // moves left ➜ right

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch mb-10">
      {/* LEFT COLUMN: Slider */}
      <div className="relative col-span-2 bg-black rounded-xl overflow-hidden h-[500px]">
        {bannerData.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              activeTab === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image */}
            <img
              src={item.image}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/40" />

            {/* Content */}
            {activeTab === index && (
              <div className="absolute top-0 left-0 w-full h-full flex items-center p-10">
                <div className="max-w-md text-white">
                  {/* Title: right ➜ left */}
                  <h2
                    className={`text-4xl font-bold mb-4 leading-tight ${baseTransit} ${slow} ${
                      entered ? shown : fromRight
                    }`}
                    style={{ transitionDelay: entered ? "0ms" : "0ms" }}
                  >
                    {item.title}
                  </h2>

                  {/* Subtitle: right ➜ left, +0.2s */}
                  <p
                    className={`text-xl text-yellow-300 font-semibold mb-6 ${baseTransit} ${slow} ${
                      entered ? shown : fromRight
                    }`}
                    style={{ transitionDelay: entered ? "0ms" : "200ms" }}
                  >
                    {item.subtitle}
                  </p>

                  {/* Buttons */}
                  <div className="flex space-x-4">
                    {/* Btn1: right ➜ left, +0.4s */}
                    <button
                      className={`px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 ${baseTransit} ${slow} ${
                        entered ? shown : fromRight
                      }`}
                      style={{ transitionDelay: entered ? "0ms" : "400ms" }}
                    >
                      {item.buttonText}
                    </button>

                    {/* Btn2: left ➜ right, +0.6s */}
                    <button
                      className={`px-6 py-3 bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-500 ${baseTransit} ${slow} ${
                        entered ? shown : fromLeft
                      }`}
                      style={{ transitionDelay: entered ? "0ms" : "600ms" }}
                    >
                      {item.buttonText2}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Tab Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {bannerData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeTab === index ? "bg-white scale-125" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* RIGHT COLUMN: Promo Images */}
      <div className="flex flex-col gap-4">
        <div className="relative group overflow-hidden rounded-xl h-[240px]">
          <img
            src={promo1}
            alt="promo1"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
            <div className="text-white">
              <h3 className="text-xl font-bold">Special Offers</h3>
              <p className="text-sm">Limited time only</p>
            </div>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-xl h-[240px]">
          <img
            src={promo2}
            alt="promo2"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
            <div className="text-white">
              <h3 className="text-xl font-bold">New Arrivals</h3>
              <p className="text-sm">Check out our latest products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
