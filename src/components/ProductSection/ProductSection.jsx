import React from "react";

// Import product images from assets
import laptop1 from "../../assets/laptop1.png";
import laptop2 from "../../assets/laptop2.png";
import laptop3 from "../../assets/laptop3.png";
import laptop4 from "../../assets/laptop4.png";
import bgImg from "../../assets/bg-pattern.webp"; 

const products = [
  {
    id: 1,
    name: "Xpeed Laptop",
    oldPrice: 640,
    price: 540,
    image: laptop1,
    rating: 4,
    btnText: "Read more",
  },
  {
    id: 2,
    name: "Intel Laptop",
    oldPrice: 640,
    price: 540,
    image: laptop2,
    rating: 3,
    btnText: "Read more",
  },
  {
    id: 3,
    name: "Core i7 Laptop",
    price: 125,
    image: laptop3,
    rating: 5,
    btnText: "Add to cart",
  },
  {
    id: 4,
    name: "Xpeed Laptop V2",
    price: 699,
    image: laptop4,
    rating: 4,
    btnText: "Add to cart",
  },
];

const ProductSection = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Enhanced Background with better visibility */}
      <div className="absolute inset-0 -z-10">
        <img
          src={bgImg}
          alt="background"
          className="w-full h-full object-cover opacity-20"
        />
        {/* Gradient overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 to-purple-50/20"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          
          <div className="text-left mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Featured Laptops
            </h2>
            <p className="text-gray-600 text-lg">
              Discover our latest collection of high-performance laptops
            </p>
          </div>

          {/* View Collection Button on Top Right */}
          <div>
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-green-500 hover:to-green-600 text-white font-bold px-8 py-3 rounded-full relative overflow-hidden group transition-all duration-500 shadow-lg hover:shadow-xl">
              <span className="relative z-10">VIEW COLLECTION</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 -z-10">
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full opacity-70 group-hover:opacity-0 transition-all duration-500"></div>
              </div>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white shadow-xl rounded-xl p-6 flex flex-col sm:flex-row items-center gap-6 hover:shadow-2xl transition-all duration-300 relative group border border-gray-100"
            >
              {/* Product Image */}
              <div className="w-full sm:w-2/5 flex justify-center">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-48 object-contain transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="flex-1 text-center sm:text-left">
                {/* Rating */}
                <div className="flex justify-center sm:justify-start text-yellow-400 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-lg">
                      {i < p.rating ? "★" : "☆"}
                    </span>
                  ))}
                </div>

               
                <h3 className="font-bold text-xl text-gray-800 mb-2">{p.name}</h3>

                {/* Prices */}
                <div className="mt-2 mb-4">
                  {p.oldPrice && (
                    <span className="text-gray-500 line-through mr-3 text-sm">
                      ${p.oldPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="text-blue-600 font-bold text-xl">
                    ${p.price.toFixed(2)}
                  </span>
                </div>

                {/* Button */}
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md">
                  {p.btnText}
                </button>
              </div>

              {/* Wishlist Icon */}
              <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors duration-300 group-hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </button>

              {/* Sale Badge */}
              {p.oldPrice && (
                <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  SALE
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional View All Button at bottom */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-green-500 hover:to-green-600 text-white font-bold px-10 py-4 rounded-full relative overflow-hidden group hover:shadow-xl transition-all duration-500">
            <span className="relative z-10">VIEW ALL PRODUCTS</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;