import React, { useState, useEffect } from "react";

import slide1 from "../../assets/model 4.jpg";
import slide2 from "../../assets/model 5.jpg";
import slide3 from "../../assets/model3.jpg";
import promo1 from "../../assets/promo1.png";
import promo2 from "../../assets/promo2.png";

const HeroBanner = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [entered, setEntered] = useState(false); 
  const [promoEntered, setPromoEntered] = useState(false); 

  const bannerData = [
    {
      title: "ENJOY THE SECURITY",
      subtitle: "Amazing offers for security systems",
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
      title: "SHOP WISE WITH PRICE COMPARISONS",
      subtitle: "Get 50% Off",
      image: slide3,
      buttonText: "EXPLORE",
      buttonText2: "LEARN MORE",
    },
  ];

  // Auto rotate slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % bannerData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [bannerData.length]);

  // Trigger first-load animation for slider
  useEffect(() => {
    const raf = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(raf);
  }, []);


  useEffect(() => {
    const raf = requestAnimationFrame(() => setPromoEntered(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleTabClick = (index) => setActiveTab(index);

  // helpers for slider first-load only transitions
  const baseTransit = "transition-all ease-out will-change-transform";
  const slow = "duration-[1100ms]";
  const shown = "opacity-100 translate-x-0";
  const fromRight = "opacity-0 translate-x-24"; 
  const fromLeft = "opacity-0 -translate-x-24"; 

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch mb-10">
      {/* LEFT COLUMN: Slider */}
      <div className="relative col-span-2 bg-black  overflow-hidden h-[500px]">
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
              className="w-full h-full object-cover opacity-2000 "
            />
            <div className="absolute inset-0 bg-blue-900/40" />

            {/* Content */}
            {activeTab === index && (
              <div className="absolute top-0 left-0 w-full h-full flex items-center p-10">
                <div className="max-w-md text-white">
                 
                  <p
                    className={`${baseTransit} ${slow} ${
                      entered ? shown : fromRight
                    } text-xl text-white font-semibold mb-4`}
                    style={{ transitionDelay: entered ? "0ms" : "200ms" }}
                  >
                    {item.subtitle}
                  </p>

                   <h2
                    className={`${baseTransit} ${slow} ${
                      entered ? shown : fromRight
                    } text-3xl font-bold mb-4 leading-tight`}
                    style={{ transitionDelay: entered ? "0ms" : "0ms" }}
                  >
                    {item.title}
                  </h2>

                  {/* Buttons */}
                  <div className="flex space-x-4">
                    {/* Btn1: right ➜ left */}
                    <button
                      className={`${baseTransit} ${slow} ${
                        entered ? shown : fromRight
                      } px-6 py-3 bg-yellow-400 text-black font-medium  hover:bg-blue-700`}
                      style={{ transitionDelay: entered ? "0ms" : "400ms" }}
                    >
                      {item.buttonText}
                    </button>

                    <button
                      className={`${baseTransit} ${slow} ${
                        entered ? shown : fromLeft
                      } px-6 py-3  text-blue-500 font-medium hover:bg-yellow-500 border border-blue-500`}
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
        {/* Promo 1 */}
        <div className="relative group overflow-hidden h-[250px]">
          <img
            src={promo1}
            alt="promo1"
            className={`w-full h-full object-cover transition-all duration-700 ease-out ${
              promoEntered ? "opacity-100 scale-100" : "opacity-0 scale-105"
            } group-hover:scale-110`}
            style={{ transitionDelay: promoEntered ? "0ms" : "0ms" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
            <div className="text-white">
              <h3 className="text-xl font-bold">Special Offers</h3>
              <p className="text-sm">Limited time only</p>
            </div>
          </div>
        </div>

        {/* Promo 2 */}
        <div className="relative group overflow-hidden h-[230px]">
          <img
            src={promo2}
            alt="promo2"
            className={`w-full h-full object-cover transition-all duration-700 ease-out ${
              promoEntered ? "opacity-100 scale-100" : "opacity-0 scale-105"
            } group-hover:scale-110`}
            style={{ transitionDelay: promoEntered ? "200ms" : "200ms" }}
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
