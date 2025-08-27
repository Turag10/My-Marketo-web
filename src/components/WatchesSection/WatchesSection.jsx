import React, { useState } from "react";


import tabwatch1 from "../../assets/tabwatch1.png";
import tabwatch2 from "../../assets/tabwatch2.png";


import watch1 from "../../assets/watch1.png";
import watch2 from "../../assets/watch2.png";
import watch3 from "../../assets/watch3.png";
import watch4 from "../../assets/watch4.png";
import watch5 from "../../assets/watch5.png";
import watch6 from "../../assets/watch6.png";
import watch7 from "../../assets/watch7.png";
import watch8 from "../../assets/watch6.png";
import watch from "../../assets/watch.jpg";

const WatchSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    "Analog",
    "Digital",
    "Smart Watches",
    "Luxury",
    "Sports",
    "Casual",
    "Chronograph",
  ];

  const tabImages = [
    { src: tabwatch1, label: "New Arrivals" },
    { src: tabwatch2, label: "Best Sellers" },
  ];

  const products = [
    { id: 1, image: watch1, name: "Analog Classic", price: "$120" },
    { id: 2, image: watch2, name: "Digital Sport", price: "$80" },
    { id: 3, image: watch3, name: "Smart Watch Pro", price: "$250" },
    { id: 4, image: watch4, name: "Luxury Chrono", price: "$400" },
    { id: 5, image: watch5, name: "Casual Round", price: "$90" },
    { id: 6, image: watch6, name: "Metal Band", price: "$150" },
    { id: 7, image: watch7, name: "Sports Tracker", price: "$200" },
    { id: 8, image: watch8, name: "Classic Leather", price: "$110" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 border border-yellow-100">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/3 flex flex-col lg:flex-row gap-4">
          {/* Categories */}
          <div className="w-full lg:w-1/2 relative h-120  overflow-hidden">
            <img
              src={watch} // background image
              alt="Background"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
              <h2 className="text-3xl font-bold mb-3 text-gray-800">Watches</h2>
              <ul className="space-y-1.5 text-gray-700 text-sm">
                {categories.map((cat, idx) => (
                  <li
                    key={idx}
                    className="cursor-pointer hover:text-blue-600 transition-colors duration-200"
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tab section with horizontal dots */}
          <div className="w-full lg:w-1/2 bg-white rounded overflow-hidden border border-gray-100 flex flex-col">
            <div className="h-70 w-full">
              <img
                src={tabImages[activeTab].src}
                alt={tabImages[activeTab].label}
                className="w-full h-full object-cover transition-transform duration-500"
              />
            </div>

            {/* Horizontal dots */}
            <div className="flex justify-center space-x-3 py-3 bg-gray-50">
              {tabImages.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    activeTab === idx
                      ? "bg-blue-600 scale-125 shadow-lg"
                      : "bg-gray-300 hover:bg-blue-400"
                  }`}
                  title={tab.label}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Image grid */}
        <div className="w-full lg:w-2/3 border border-gray-100 rounded-lg p-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {products.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden rounded border border-gray-100 bg-white"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover transition-all duration-300 hover:scale-105 hover:brightness-110"
                  />
                </div>
                <div className="p-2 text-center">
                  <h3 className="text-sm font-medium text-gray-700">{product.name}</h3>
                  <p className="text-sm font-semibold text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchSection;
