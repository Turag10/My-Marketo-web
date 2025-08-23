import React from "react";

const HolidayDealsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {/* First Promo Card - Black Watch */}
      <div className="relative group overflow-hidden h-64">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80)", // Black Watch
          }}
        />

        {/* Full Diagonal Light Sweep */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-[120%] bottom-0 w-[200%] h-full bg-white opacity-10 group-hover:opacity-20 transform -rotate-45 transition-all duration-500 group-hover:translate-x-[120%] group-hover:-translate-y-[120%]"></div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

        {/* Text Left Side */}
        <div className="absolute left-6 bottom-6 text-white z-10 max-w-[70%]">
          <p className="text-sm font-medium text-gray-200 mb-1">Exclusive Offer</p>
          <h3 className="text-xl font-bold mb-3">Luxury Black Watch</h3>
          <button className="px-4 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors">
            VIEW COLLECTION
          </button>
        </div>
      </div>

      {/* Second Promo Card - iPhone */}
      <div className="relative group overflow-hidden h-66">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80)", // iPhone
          }}
        />

        {/* Full Diagonal Light Sweep */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-[120%] bottom-0 w-[200%] h-full bg-white opacity-10 group-hover:opacity-20 transform -rotate-45 transition-all duration-500 group-hover:translate-x-[120%] group-hover:-translate-y-[120%]"></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-transparent" />

        <div className="absolute left-6 bottom-6 text-white z-10 max-w-[70%]">
          <p className="text-sm font-medium text-gray-200 mb-1">Get 50% Off</p>
          <h3 className="text-xl font-bold mb-3">Latest iPhones</h3>
          <button className="px-4 py-2 bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-500 transition-colors">
            SHOP NOW
          </button>
        </div>
      </div>

      {/* Third Promo Card - Headphones (positioned higher) */}
      <div className="relative group overflow-hidden h-68 ">
        {/* Image Container with adjusted positioning */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover transition-transform duration-700 group-hover:scale-110"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80)", // Headphones
              backgroundPosition: "center 30%", // Positioned higher
            }}
          />
        </div>

        {/* Full Diagonal Light Sweep */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-[120%] bottom-0 w-[200%] h-full bg-white opacity-10 group-hover:opacity-20 transform -rotate-45 transition-all duration-500 group-hover:translate-x-[120%] group-hover:-translate-y-[120%]"></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-transparent" />

        <div className="absolute left-6 bottom-6 text-white z-10 max-w-[70%]">
          <p className="text-sm font-medium text-gray-200 mb-1">Premium Audio</p>
          <h3 className="text-xl font-bold mb-3">Wireless Headphones</h3>
          <button className="px-4 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors">
            EXPLORE NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default HolidayDealsSection;