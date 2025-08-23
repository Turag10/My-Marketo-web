import React from "react";

const TopCategoriesSection = () => {
  const categories = [
    {
      id: 1,
      name: "Xpeed Projector",
      price: 499.00,
      originalPrice: 520.00,
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      category: "Projector"
    },
    {
      id: 2,
      name: "CC Camera",
      price: 210.00,
      originalPrice: 240.00,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      category: "Camera"
    },
    {
      id: 3,
      name: "Stereo Headset",
      price: 89.99,
      originalPrice: 119.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      category: "Headphone"
    },
    {
      id: 4,
      name: "Apple iPhone 7s",
      price: 660.00,
      originalPrice: 690.00,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      category: "Phone"
    },
    {
      id: 5,
      name: "Moving Camera",
      price: 230.00,
      originalPrice: 280.00,
      image: "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      category: "Camera"
    },
    {
      id: 6,
      name: "Camera Drone",
      price: 349.99,
      originalPrice: 399.99,
      image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      category: "Drone"
    },
    {
      id: 7,
      name: "Projector Light",
      price: 129.99,
      originalPrice: 159.99,
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      category: "Light"
    },
    {
      id: 8,
      name: "Apple iPhone 6s",
      price: 299.00,
      originalPrice: 349.00,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      category: "Phone"
    },
    {
      id: 9,
      name: "Core i7 Laptop",
      price: 1250.00,
      originalPrice: 1399.00,
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      category: "Laptop"
    },
    {
      id: 10,
      name: "Holy Stone Drone",
      price: 199.99,
      originalPrice: 249.99,
      image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      category: "Drone"
    },
    {
      id: 11,
      name: "Wireless Microphone",
      price: 70.00,
      originalPrice: 89.99,
      image: "https://images.unsplash.com/photo-1601142776324-5a5d5a4d9b0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      category: "Microphone"
    },
    {
      id: 12,
      name: "Unlocked Mobile Phone",
      price: 125.00,
      originalPrice: 149.99,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      category: "Phone"
    }
  ];

  return (
    <div className="mb-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <div className="text-left mb-4 md:mb-0">
          <h2 className="text-3xl font-bold text-gray-800">TOP CATEGORIES THIS WEEK</h2>
        </div>
        <div className="flex space-x-6 text-gray-600 font-medium">
          <span className="hover:text-blue-600 cursor-pointer">Projector</span>
          <span className="hover:text-blue-600 cursor-pointer">Light</span>
          <span className="hover:text-blue-600 cursor-pointer">Laptop</span>
          <span className="hover:text-blue-600 cursor-pointer">Headphone</span>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              
              {/* Wishlist Button */}
              <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition-colors">
                <svg className="w-5 h-5 text-gray-600 hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>

              {/* Sale Badge */}
              {product.originalPrice > product.price && (
                <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  SALE
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                {product.name}
              </h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                  )}
                </div>
                <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-10">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          VIEW ALL PRODUCTS
        </button>
      </div>
    </div>
  );
};

export default TopCategoriesSection;