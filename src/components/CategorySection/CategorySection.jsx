import React, { useState, useContext } from "react";
import { FiSearch, FiMenu, FiChevronRight } from "react-icons/fi";

import { CartContext } from "../CartContext/CartContext";
const CategorySection = () => {
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isBlackFridayHovered, setIsBlackFridayHovered] = useState(false);
  

  const { addToCart } = useContext(CartContext);

 
  const allCategories = [
    {
      name: "Women's Fashion",
      count: 72,
      subcategories: [
        { 
          name: "Dresses", 
          products: [
            { id: 1, name: "Summer Dresses", price: "$29.99", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" },
            { id: 2, name: "Evening Dresses", price: "$49.99", image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" },
            { id: 3, name: "Casual Dresses", price: "$39.99", image: "https://images.unsplash.com/photo-1529903384028-929ae5dccdf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" }
          ] 
        },
        { 
          name: "Tops", 
          products: [
            { id: 4, name: "Blouses", price: "$24.99", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" },
            { id: 5, name: "T-Shirts", price: "$19.99", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" }
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
            { id: 6, name: "Formal Shirts", price: "$39.99", image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" },
            { id: 7, name: "Casual Shirts", price: "$29.99", image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" }
          ] 
        },
        { 
          name: "Shoes", 
          products: [
            { id: 8, name: "Sneakers", price: "$89.99", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" },
            { id: 9, name: "Formal Shoes", price: "$79.99", image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" }
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
            { id: 10, name: "Smartphones", price: "$599.99", image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" },
            { id: 11, name: "Tablets", price: "$399.99", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" }
          ] 
        },
        { 
          name: "Laptops", 
          products: [
            { id: 12, name: "Gaming Laptops", price: "$1299.99", image: "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" },
            { id: 13, name: "Ultrabooks", price: "$999.99", image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" }
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
            { id: 14, name: "Gold Necklaces", price: "$199.99", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ad5e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" },
            { id: 15, name: "Silver Necklaces", price: "$99.99", image: "https://images.unsplash.com/photo-1602751584552-8ba73c6e5e19?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" }
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
            { id: 16, name: "Cookware Sets", price: "$149.99", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" },
            { id: 17, name: "Cutlery", price: "$49.99", image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" }
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

  const handleSubcategoryClick = (subcategory, e) => {
   
    e.stopPropagation();
    setActiveSubcategory(subcategory);
  };

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    addToCart(product);
  };

  const renderProductCards = (products) => {
    return (
      <div className="grid grid-cols-2 gap-3">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded p-2 shadow-sm border hover:shadow-md transition-shadow">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-16 object-cover rounded mb-1"
            />
            <p className="text-xs font-medium truncate">{product.name}</p>
            <p className="text-xs text-red-600 font-bold">{product.price}</p>
            <button 
              className="mt-1 text-xs bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 transition-colors"
              onClick={(e) => handleAddToCart(product, e)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="bg-white py-8 px-4 pt-2 pb-7 relative">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 h-16">
          
          {/* Left Side - All Categories Dropdown */}
          <div className="lg:w-1/4 h-full relative">
            <div className="bg-yellow-300 text-white p-4 flex justify-between items-center cursor-pointer h-full"
                 onClick={() => setExpandedMenu(expandedMenu === "categories" ? null : "categories")}>
              <h3 className="text-lg font-bold flex items-center">
                <FiMenu className="mr-2" />
                ALL CATEGORIES
              </h3>
              <FiChevronRight className={`transform transition-transform ${expandedMenu === "categories" ? 'rotate-90' : ''}`} />
            </div>
            
            {expandedMenu === "categories" && (
              <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4">
                <ul className="space-y-2">
                  {allCategories.map((category, index) => (
                    <li
                      key={index}
                      onClick={() => handleCategoryClick(category)}
                      className={`relative flex justify-between items-center cursor-pointer p-2 rounded ${
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

                      {/* Show subcategories when category is active */}
                      {activeCategory?.name === category.name && (
                        <div className="absolute left-full top-0 ml-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10 p-4">
                          <h4 className="font-semibold text-gray-800 mb-3">Subcategories</h4>
                          <ul className="space-y-2">
                            {category.subcategories?.map((sub, subIndex) => (
                              <li
                                key={subIndex}
                                onClick={(e) => handleSubcategoryClick(sub, e)}
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
                      )}

                      {/*  products when subcategory is active */}
                      {activeSubcategory && activeCategory?.name === category.name && (
                        <div className="absolute left-full top-0 ml-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-20 p-4">
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="font-semibold text-gray-800">{activeSubcategory.name}</h4>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveSubcategory(null);
                              }}
                              className="text-gray-500 hover:text-red-600"
                            >
                              ✕
                            </button>
                          </div>
                          {renderProductCards(activeSubcategory.products)}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Mid- Search Bar */}
          <div className="lg:w-1/2 h-full flex items-center">
            <div className="w-full bg-white shadow-md p-4 h-full flex items-center">
              <form onSubmit={handleSearch} className="flex w-full">
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 border border-gray-300  px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 h-12"
                />
                <button
                  type="submit"
                  className="bg-yellow-300 hover:bg-red-700 text-white px-6 transition-colors flex items-center h-12"
                >
                  <FiSearch size={20} />
                  <span className="ml-2"></span>
                </button>
              </form>
            </div>
          </div>

          {/* Right Side - Black Friday */}
          <div className="lg:w-1/4 h-full">
            <div 
              className={`bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-md p-4 h-full flex flex-col justify-center relative overflow-hidden transition-all duration-500 ${
                isBlackFridayHovered ? "bg-gradient-to-br from-white to-black" : ""
              }`}
              onMouseEnter={() => setIsBlackFridayHovered(true)}
              onMouseLeave={() => setIsBlackFridayHovered(false)}
            >
              {/* Animated color overlay */}
              <div 
                className={`absolute inset-0 bg-gradient-to-r from-white to-black transition-transform duration-500 ${
                  isBlackFridayHovered ? "translate-x-0" : "-translate-x-full"
                }`}
              ></div>
              
              <div className="relative z-10 text-center">
                <span className="text-xs font-medium bg-yellow-400 text-red-700 px-2 py-1 rounded-full">HOT</span>
                <h3 className="text-lg font-bold mt-1">BLACK FRIDAY</h3>
                <p className="text-xl font-extrabold my-1">45% OFF</p>
                <button className="bg-white text-red-600 text-xs font-semibold px-4 py-1 rounded-full hover:bg-gray-100 transition-colors relative z-10 mt-1">
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