import React, { useState } from "react";
import { FiSearch, FiMenu, FiChevronRight, FiArrowRight } from "react-icons/fi";

const CategorySection = () => {
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isBlackFridayHovered, setIsBlackFridayHovered] = useState(false);

  // Categories data matching Marketo demo
  const allCategories = [
    {
      name: "Women's Fashion",
      count: 72,
      subcategories: [
        { 
          name: "Dresses", 
          products: [
            { name: "Summer Dresses", price: "$29.99", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" },
            { name: "Evening Dresses", price: "$49.99", image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" }
          ] 
        },
        { 
          name: "Tops", 
          products: [
            { name: "Blouses", price: "$24.99", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" },
            { name: "T-Shirts", price: "$19.99", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" }
          ] 
        }
      ]
    },
    {
      name: "Men's Fashion",
      count: 64,
      subcategories: [
        { 
          name: "Shirts", 
          products: [
            { name: "Formal Shirts", price: "$39.99", image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" },
            { name: "Casual Shirts", price: "$29.99", image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" }
          ] 
        },
        { 
          name: "Shoes", 
          products: [
            { name: "Sneakers", price: "$89.99", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" },
            { name: "Formal Shoes", price: "$79.99", image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" }
          ] 
        }
      ]
    },
    {
      name: "Electronics",
      count: 96,
      subcategories: [
        { 
          name: "Mobile & Tablets", 
          products: [
            { name: "Smartphones", price: "$599.99", image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" },
            { name: "Tablets", price: "$399.99", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" }
          ] 
        },
        { 
          name: "Laptops", 
          products: [
            { name: "Gaming Laptops", price: "$1299.99", image: "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" },
            { name: "Ultrabooks", price: "$999.99", image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" }
          ] 
        }
      ]
    },
    {
      name: "Jewelry & Watches",
      count: 45,
      subcategories: [
        { 
          name: "Necklaces", 
          products: [
            { name: "Gold Necklaces", price: "$199.99", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ad5e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" },
            { name: "Silver Necklaces", price: "$99.99", image: "https://images.unsplash.com/photo-1602751584552-8ba73c6e5e19?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" }
          ] 
        }
      ]
    },
    {
      name: "Home & Kitchen",
      count: 38,
      subcategories: [
        { 
          name: "Kitchenware", 
          products: [
            { name: "Cookware Sets", price: "$149.99", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" },
            { name: "Cutlery", price: "$49.99", image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" }
          ] 
        }
      ]
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      setSearchQuery("");
    }
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setActiveSubcategory(null);
    setExpandedMenu("categories");
  };

  const handleSubcategoryClick = (subcategory) => {
    setActiveSubcategory(subcategory);
  };

  const renderProductCards = (products) => {
    return (
      <div className="grid grid-cols-2 gap-3 mt-3">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg p-2 shadow-sm border hover:shadow-md transition-shadow">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-16 object-cover rounded-md mb-1"
            />
            <p className="text-xs font-medium truncate">{product.name}</p>
            <p className="text-xs text-red-600 font-bold">{product.price}</p>
            <button className="mt-1 text-xs bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 transition-colors">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="bg-white py-8 px-4 relative">
      {/* Top Center Search Bar */}
      <div className="container mx-auto mb-8">
        <div className="flex justify-center">
          <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-4">
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 border border-gray-300 rounded-l-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-6 rounded-r-lg transition-colors flex items-center"
              >
                <FiSearch size={20} />
                <span className="ml-2">Search</span>
              </button>
            </form>
            
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="text-xs text-gray-500">Popular Searches:</span>
              {["iPhone", "Laptop", "Headphones", "Watch", "Shoes"].map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSearchQuery(item)}
                  className="text-xs text-gray-600 hover:text-red-600 bg-gray-100 px-2 py-1 rounded"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Left Side - All Categories Dropdown */}
          <div className="lg:w-1/4 bg-white rounded-lg shadow-md relative">
            <div className="bg-red-600 text-white p-4 rounded-t-lg flex justify-between items-center cursor-pointer"
                 onClick={() => setExpandedMenu(expandedMenu === "categories" ? null : "categories")}>
              <h3 className="text-lg font-bold flex items-center">
                <FiMenu className="mr-2" />
                ALL CATEGORIES
              </h3>
              <FiChevronRight className={`transform transition-transform ${expandedMenu === "categories" ? 'rotate-90' : ''}`} />
            </div>
            
            {expandedMenu === "categories" && (
              <div className="p-4 border border-gray-200 rounded-b-lg">
                <ul className="space-y-2">
                  {allCategories.map((category, index) => (
                    <li
                      key={index}
                      onClick={() => handleCategoryClick(category)}
                      className={`flex justify-between items-center cursor-pointer p-2 rounded ${
                        activeCategory?.name === category.name
                          ? "bg-red-50 text-red-600 font-semibold"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <span className="text-sm flex items-center">
                        {category.name}
                        {category.subcategories && category.subcategories.length > 0 && (
                          <FiChevronRight className="ml-1 text-gray-400" size={14} />
                        )}
                      </span>
                      <span className="bg-gray-100 text-xs font-medium px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Mega Menu for Categories */}
            {activeCategory && (
              <div className="absolute top-full left-0 mt-1 w-[800px] bg-white rounded-lg shadow-2xl z-50 p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-gray-800">{activeCategory.name}</h3>
                  <button
                    onClick={() => setActiveCategory(null)}
                    className="text-gray-500 hover:text-red-600"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid grid-cols-4 gap-6">
                  {/* Subcategories */}
                  <div className="col-span-1">
                    <h4 className="font-semibold text-gray-700 mb-3">Subcategories</h4>
                    <ul className="space-y-2">
                      {activeCategory.subcategories?.map((sub, index) => (
                        <li
                          key={index}
                          onClick={() => handleSubcategoryClick(sub)}
                          className={`cursor-pointer p-2 rounded text-sm flex justify-between items-center ${
                            activeSubcategory?.name === sub.name
                              ? "bg-red-50 text-red-600 font-semibold"
                              : "text-gray-600 hover:bg-gray-50"
                          }`}
                        >
                          <span>{sub.name}</span>
                          <FiChevronRight size={14} className="text-gray-400" />
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Products */}
                  <div className="col-span-3">
                    <h4 className="font-semibold text-gray-700 mb-3">
                      {activeSubcategory ? activeSubcategory.name : "Popular Products"}
                    </h4>
                    
                    {activeSubcategory ? (
                      renderProductCards(activeSubcategory.products)
                    ) : (
                      <div className="grid grid-cols-3 gap-4">
                        {activeCategory.subcategories?.[0]?.products.slice(0, 3).map((product, index) => (
                          <div key={index} className="bg-gray-50 rounded-lg p-3 text-center hover:shadow-md transition-shadow">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-20 object-cover rounded-md mb-2 mx-auto"
                            />
                            <p className="text-sm font-medium">{product.name}</p>
                            <p className="text-red-600 font-bold text-sm">{product.price}</p>
                            <button className="mt-2 text-xs bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700">
                              Add to Cart
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Middle - Empty space for content */}
          <div className="lg:w-1/2 flex items-center justify-center bg-gray-100 rounded-lg">
            <div className="text-center text-gray-500 p-8">
              <p className="text-lg font-medium">Featured Products</p>
              <p className="mt-2">Select a category to view products</p>
            </div>
          </div>

          {/* Right Side - Black Friday Banner with Animation */}
          <div className="lg:w-1/4">
            <div 
              className={`bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg shadow-md p-6 h-full flex flex-col justify-center relative overflow-hidden transition-all duration-500 ${
                isBlackFridayHovered ? "bg-gradient-to-br from-red-800 to-red-600" : ""
              }`}
              onMouseEnter={() => setIsBlackFridayHovered(true)}
              onMouseLeave={() => setIsBlackFridayHovered(false)}
            >
              {/* Animated color overlay */}
              <div 
                className={`absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 transition-transform duration-500 ${
                  isBlackFridayHovered ? "translate-x-0" : "-translate-x-full"
                }`}
              ></div>
              
              <div className="relative z-10 text-center">
                <span className="text-sm font-medium bg-yellow-400 text-red-700 px-2 py-1 rounded-full">HOT</span>
                <h3 className="text-xl font-bold mt-2">BLACK FRIDAY</h3>
                <p className="text-3xl font-extrabold my-3">45% OFF</p>
                <p className="text-sm opacity-90 mb-4">Limited time offer. Don't miss out!</p>
                <button className="bg-white text-red-600 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition-colors relative z-10">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;