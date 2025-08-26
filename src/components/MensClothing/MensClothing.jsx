import React, { useState } from "react";

// Import your images from the assets folder
import tabImg1 from "../../assets/tab1.png";
import tabImg2 from "../../assets/tab2.jpg";

import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";
import product4 from "../../assets/product4.png";
import product5 from "../../assets/product5.png";
import product6 from "../../assets/product6.png";
import product7 from "../../assets/product7.png";
import product8 from "../../assets/product8.png";
import product from "../../assets/product.jpg";

const MensClothing = () => {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    "Projector",
    "Mobile",
    "Light",
    "Laptop",
    "Headphone",
    "Google Glass",
    "Drone",
    "Camera",
    "3D Glass",
  ];

  const tabImages = [
    { src: tabImg1, label: "New Arrivals" },
    { src: tabImg2, label: "Best Sellers" },
  ];

  const products = [
    { id: 1, image: product1, name: "Slim Fit Shirt", price: "$35" },
    { id: 2, image: product2, name: "Casual T-Shirt", price: "$25" },
    { id: 3, image: product3, name: "Denim Shirt", price: "$40" },
    { id: 4, image: product4, name: "Formal Shirt", price: "$50" },
    { id: 5, image: product5, name: "Hoodie", price: "$45" },
    { id: 6, image: product6, name: "Crew Neck Tee", price: "$28" },
    { id: 7, image: product7, name: "Polo Shirt", price: "$38" },
    { id: 8, image: product8, name: "Graphic Tee", price: "$22" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 border border-blue-200">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/3 flex flex-col lg:flex-row gap-4">
          {/* Categories */}
          <div className="w-full lg:w-1/2 relative h-110 overflow-hidden border border-gray-100">
            <img
              src={product} 
              alt="Background"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
              <h2 className="text-3xl font-bold mb-3 text-gray-800">Men's Clothing</h2>
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
          <div className="w-full lg:w-1/2 bg-white overflow-hidden border border-gray-100 flex flex-col">
            {/* Tab image */}
            <div className="h-80 w-full">
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
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeTab === idx ? "bg-orange-600 scale-125 shadow-lg" : "bg-gray-300 hover:bg-blue-400"
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

export default MensClothing;
