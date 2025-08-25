import React, { useState } from "react";

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
    {
      src: "https://images.unsplash.com/photo-1602810318383-e5bba5e9d1f3?auto=format&fit=crop&w=600&q=80",
      label: "New Arrivals",
    },
    {
      src: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
      label: "Best Sellers",
    },
  ];

  const products = [
    { id: 1, image: "https://images.unsplash.com/photo-1661234567890-abcd1234?auto=format&fit=crop&w=500&q=80", name: "Slim Fit Shirt", price: "$35" },
    { id: 2, image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=500&q=80", name: "Casual T-Shirt", price: "$25" },
    { id: 3, image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=500&q=80", name: "Denim Shirt", price: "$40" },
    { id: 4, image: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?auto=format&fit=crop&w=500&q=80", name: "Formal Shirt", price: "$50" },
    { id: 5, image: "https://images.unsplash.com/photo-1602810318383-e5bba5e9d1f3?auto=format&fit=crop&w=500&q=80", name: "Hoodie", price: "$45" },
    { id: 6, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=500&q=80", name: "Crew Neck Tee", price: "$28" },
    { id: 7, image: "https://images.unsplash.com/photo-1612392061784-04b45752c1f9?auto=format&fit=crop&w=500&q=80", name: "Polo Shirt", price: "$38" },
    { id: 8, image: "https://images.unsplash.com/photo-1520975682038-cb647234f3ec?auto=format&fit=crop&w=500&q=80", name: "Graphic Tee", price: "$22" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 border border-gray-100">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-2/3 flex flex-col lg:flex-row gap-4">
          {/* Categories */}
          <div className="w-full lg:w-1/2 relative h-100  overflow-hidden border border-gray-100">
            <img
              src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=900&q=80"
              alt="Background"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
              <h2 className="text-2xl font-bold mb-3 text-gray-800">Men's Clothing</h2>
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
            {/* Tab image */}
            <div className="h-70 w-full flex-2">
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
                    activeTab === idx ? "bg-blue-600 scale-125 shadow-lg" : "bg-gray-300 hover:bg-blue-400"
                  }`}
                  title={tab.label}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Image grid */}
        <div className="w-full lg:w-2/3 p-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {products.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden"
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
