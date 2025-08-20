import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiMenu, FiX, FiArrowRight } from "react-icons/fi";

const CategorySection = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isBlackFridayHovered, setIsBlackFridayHovered] = useState(false);
  const [isPopularMenuOpen, setIsPopularMenuOpen] = useState(false);
  const [isFindProductMenuOpen, setIsFindProductMenuOpen] = useState(false);
  const [isFeaturedMenuOpen, setIsFeaturedMenuOpen] = useState(false);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    alert(`Viewing products in ${category} category`);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      setSearchQuery("");
    }
  };

  // All categories data
  const popularCategories = [
    { name: "Electronics", count: 96 },
    { name: "Men's Fashion", count: 64 },
    { name: "Women's Fashion", count: 72 },
    { name: "Office & Security", count: 45 },
    { name: "Camera", count: 38 },
    { name: "Drone", count: 29 },
    { name: "Gamepad", count: 36 },
    { name: "Mobile", count: 82 },
  ];

  const findProductCategories = [
    { name: "Mobile", count: 82 },
    { name: "Light", count: 27 },
    { name: "Laptop", count: 45 },
    { name: "Headphone", count: 63 },
    { name: "Google Glass", count: 18 },
    { name: "Gamepad", count: 36 },
    { name: "Drone", count: 29 },
    { name: "Camera", count: 38 },
    { name: "3D Glass", count: 14 },
    { name: "Uncategorized", count: 9 },
  ];

  const featuredCategories = [
    { name: "All Categories", count: 124 },
    { name: "Blogs", count: 42 },
    { name: "Gallery", count: 27 },
    { name: "Doskn", count: 15 },
  ];

  return (
    <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-12 px-4">
      <div className="container mx-auto">
        {/* Header with Search - Visible on all screens */}
        <div className="flex justify-end items-center mb-6">
          <form onSubmit={handleSearch} className="max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-600"
              >
                <FiSearch size={20} />
              </button>
            </div>
          </form>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Popular Categories Card */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-1 after:bg-red-600">
                Popular Categories
              </h3>
              <button
                onClick={() => setIsPopularMenuOpen(!isPopularMenuOpen)}
                className="p-2 rounded-md text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors"
              >
                <FiMenu size={20} />
              </button>
            </div>
            
            {isPopularMenuOpen ? (
              <div className="mb-4 p-3 bg-gray-100 rounded-md">
                <h4 className="font-medium text-gray-700 mb-2">All Popular Categories</h4>
                <ul className="space-y-2">
                  {popularCategories.map((item, index) => (
                    <li 
                      key={index} 
                      className="flex justify-between items-center text-gray-600 hover:text-red-600 transition-colors duration-200 cursor-pointer text-sm"
                      onClick={() => handleCategoryClick(item.name)}
                    >
                      <span>{item.name}</span>
                      <span className="bg-white text-xs font-medium px-2 py-1 rounded-full">
                        {item.count}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <ul className="space-y-3">
                {popularCategories.slice(0, 5).map((item, index) => (
                  <li 
                    key={index} 
                    className="flex justify-between items-center text-gray-600 hover:text-red-600 transition-colors duration-200 cursor-pointer"
                    onClick={() => handleCategoryClick(item.name)}
                  >
                    <span>{item.name}</span>
                    <span className="bg-gray-100 text-xs font-medium px-2 py-1 rounded-full hover:bg-red-600 hover:text-white transition-colors">
                      {item.count}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            
            <button 
              onClick={() => setIsPopularMenuOpen(!isPopularMenuOpen)}
              className="inline-block mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300 flex items-center text-sm"
            >
              {isPopularMenuOpen ? 'Show Less' : 'View All'} <FiArrowRight className="ml-2" />
            </button>
          </div>
          
          {/* Find your product Card */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-1 after:bg-red-600">
                Find your product
              </h3>
              <button
                onClick={() => setIsFindProductMenuOpen(!isFindProductMenuOpen)}
                className="p-2 rounded-md text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors"
              >
                <FiMenu size={20} />
              </button>
            </div>
            
            {isFindProductMenuOpen ? (
              <div className="mb-4 p-3 bg-gray-100 rounded-md">
                <h4 className="font-medium text-gray-700 mb-2">All Product Categories</h4>
                <ul className="space-y-2">
                  {findProductCategories.map((item, index) => (
                    <li 
                      key={index} 
                      className="flex justify-between items-center text-gray-600 hover:text-red-600 transition-colors duration-200 cursor-pointer text-sm"
                      onClick={() => handleCategoryClick(item.name)}
                    >
                      <span>{item.name}</span>
                      <span className="bg-white text-xs font-medium px-2 py-1 rounded-full">
                        {item.count}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <ul className="space-y-3">
                {findProductCategories.slice(0, 5).map((item, index) => (
                  <li 
                    key={index} 
                    className="flex justify-between items-center text-gray-600 hover:text-red-600 transition-colors duration-200 cursor-pointer"
                    onClick={() => handleCategoryClick(item.name)}
                  >
                    <span>{item.name}</span>
                    <span className="bg-gray-100 text-xs font-medium px-2 py-1 rounded-full hover:bg-red-600 hover:text-white transition-colors">
                      {item.count}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            
            <button 
              onClick={() => setIsFindProductMenuOpen(!isFindProductMenuOpen)}
              className="inline-block mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300 flex items-center text-sm"
            >
              {isFindProductMenuOpen ? 'Show Less' : 'View All'} <FiArrowRight className="ml-2" />
            </button>
          </div>
          
          {/* Featured Categories Card */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-1 after:bg-red-600">
                Featured Categories
              </h3>
              <button
                onClick={() => setIsFeaturedMenuOpen(!isFeaturedMenuOpen)}
                className="p-2 rounded-md text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors"
              >
                <FiMenu size={20} />
              </button>
            </div>
            
            {isFeaturedMenuOpen ? (
              <div className="mb-4 p-3 bg-gray-100 rounded-md">
                <h4 className="font-medium text-gray-700 mb-2">All Featured Categories</h4>
                <ul className="space-y-2">
                  {featuredCategories.map((item, index) => (
                    <li 
                      key={index} 
                      className="flex justify-between items-center text-gray-600 hover:text-red-600 transition-colors duration-200 cursor-pointer text-sm"
                      onClick={() => handleCategoryClick(item.name)}
                    >
                      <span>{item.name}</span>
                      <span className="bg-white text-xs font-medium px-2 py-1 rounded-full">
                        {item.count}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <ul className="space-y-3">
                {featuredCategories.slice(0, 3).map((item, index) => (
                  <li 
                    key={index} 
                    className="flex justify-between items-center text-gray-600 hover:text-red-600 transition-colors duration-200 cursor-pointer"
                    onClick={() => handleCategoryClick(item.name)}
                  >
                    <span>{item.name}</span>
                    <span className="bg-gray-100 text-xs font-medium px-2 py-1 rounded-full hover:bg-red-600 hover:text-white transition-colors">
                      {item.count}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            
            <button 
              onClick={() => setIsFeaturedMenuOpen(!isFeaturedMenuOpen)}
              className="inline-block mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300 flex items-center text-sm"
            >
              {isFeaturedMenuOpen ? 'Show Less' : 'View All'} <FiArrowRight className="ml-2" />
            </button>
          </div>
          
          {/* Black Friday Deal Card with Animation */}
          <div 
            className={`bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 rounded-lg shadow-md flex flex-col justify-between relative overflow-hidden transition-all duration-500 ${
              isBlackFridayHovered ? "bg-gradient-to-br from-red-800 to-red-600" : ""
            }`}
            onMouseEnter={() => setIsBlackFridayHovered(true)}
            onMouseLeave={() => setIsBlackFridayHovered(false)}
            onClick={() => setIsBlackFridayHovered(!isBlackFridayHovered)}
          >
            {/* Animated color overlay */}
            <div 
              className={`absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 transition-transform duration-500 ${
                isBlackFridayHovered ? "translate-x-0" : "-translate-x-full"
              }`}
            ></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">BLACK FRIDAY</h3>
              <p className="text-3xl font-extrabold mb-6">Get 45% Off!</p>
              <p className="text-sm text-gray-300 mb-8">
                Limited time offer. Don't miss out on our biggest sale of the year.
              </p>
            </div>
            <div className="mb-6 relative z-10">
              <h4 className="text-lg font-semibold mb-3">TOP PICKS IN POPULAR TECH & MORE</h4>
              <a 
                href="http://demo.xpeedstudio.com/marketov2/product/view_ebooks/" 
                className="text-red-300 hover:text-white text-sm font-medium transition-colors"
              >
                http://demo.xpeedstudio.com/marketov2/product/view_ebooks/
              </a>
            </div>
            <Link 
              to="/black-friday" 
              className="bg-red-600 hover:bg-red-700 text-white text-center font-semibold py-3 px-6 rounded-full transition-colors duration-300 block relative z-10"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;