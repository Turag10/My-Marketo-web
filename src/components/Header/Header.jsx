import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingCart,
  FiMenu,
  FiX,
  FiChevronDown,
} from "react-icons/fi";
import { CartContext } from "../CartContext/CartContext";

import home1Img from "../../assets/laptop.webp";
import home2Img from "../../assets/headphone 2.jpg"
import home3Img from "../../assets/smartwatch.jpg"
import home4Img from "../../assets/phones.jpg"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [wishlistItems] = useState(0);
  const [showSpinner, setShowSpinner] = useState(false);
  
  // Use the cart context
  const {  getCartCount } = useContext(CartContext);
  const cartItemsCount = getCartCount();

  const handleNavigation = (e, destination) => {
    e.preventDefault();
    setShowSpinner(true);

    setTimeout(() => {
      setShowSpinner(false);
      alert(`Navigating to ${destination}`);
    }, 10);
  };

  const homeDropdownItems = [
    { name: "Laptop", path: "/home1", img: home1Img },
    { name: "Headphones", path: "/home2", img: home2Img },
    { name: "SmartWatches", path: "/home3", img: home3Img },
    { name: "Phones", path: "/home4", img: home4Img },
  ];

  const pagesDropdownItems = [
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
    { name: "Terms & Conditions", path: "/terms" },
  ];

  const shopDropdownItems = [
    { name: "All Products", path: "/products" },
    { name: "New Arrivals", path: "/new" },
    { name: "Best Sellers", path: "/bestsellers" },
    { name: "Sale Items", path: "/sale" },
  ];

  const blogDropdownItems = [
    { name: "Blog Grid", path: "/blog" },
    { name: "Blog List", path: "/blog/list" },
    { name: "Single Post", path: "/blog/post" },
  ];

  return (
    <>
      <style>
        {`
          @keyframes rotate-y {
            0% { transform: rotateY(0deg); }
            100% { transform: rotateY(360deg); }
          }
          .animate-rotate-y {
            animation: rotate-y 1s ease-in-out;
          }
          .animate-once {
            animation-iteration-count: 1;
          }
          .home-dropdown-card {
            transition: all 0.3s ease;
          }
          .home-dropdown-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
          }
        `}
      </style>

      {/* Spinner */}
      {showSpinner && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-4 border-red-100 border-t-red-600 rounded-full animate-spin z-50"></div>
      )}

      <header className=" sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="text-3xl font-bold text-gray-900 animate-rotate-y animate-once flex items-center"
              onClick={(e) => handleNavigation(e, "Home")}
            >
              Marke<span className="text-red-600">TOP</span>
              <span className="w-2 h-2 bg-black ml-1 mt-1"></span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {/* Home Dropdown with Cards */}
              <div className="relative group">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-gray-900 font-medium flex items-center"
                  onClick={(e) => handleNavigation(e, "Home")}
                >
                  Home{" "}
                  <FiChevronDown className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
                </Link>

                {/* Cards Grid */}
                <div className="absolute left-0 mt-2 bg-white rounded-md shadow-lg p-4
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                  transition-all duration-300 z-50 w-[900px]">
                  <div className="grid grid-rows-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
                    {homeDropdownItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className=" overflow-hidden hover:shadow-lg transition-all"
                        onClick={(e) => handleNavigation(e, item.name)}
                      >
                        <div className="max-w-full h-40">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-center py-2 text-black font-semibold text-lg hover:text-blue-400">
                          {item.name}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Shop Dropdown */}
              <div className="relative group">
                <Link
                  to="/products"
                  className="text-gray-700 hover:text-gray-900 font-medium flex items-center"
                  onClick={(e) => handleNavigation(e, "Shop")}
                >
                  Shop{" "}
                  <FiChevronDown className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
                </Link>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  {shopDropdownItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-colors"
                      onClick={(e) => handleNavigation(e, item.name)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Pages Dropdown */}
              <div className="relative group">
                <Link
                  to="/pages"
                  className="text-gray-700 hover:text-gray-900 font-medium flex items-center"
                  onClick={(e) => handleNavigation(e, "Pages")}
                >
                  Pages{" "}
                  <FiChevronDown className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
                </Link>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  {pagesDropdownItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-colors"
                      onClick={(e) => handleNavigation(e, item.name)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Blog Dropdown */}
              <div className="relative group">
                <Link
                  to="/blog"
                  className="text-gray-700 hover:text-gray-900 font-medium flex items-center"
                  onClick={(e) => handleNavigation(e, "Blog")}
                >
                  Blog{" "}
                  <FiChevronDown className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
                </Link>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  {blogDropdownItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-colors"
                      onClick={(e) => handleNavigation(e, item.name)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <Link
                to="/contact"
                className="text-gray-700 hover:text-gray-900 font-medium"
                onClick={(e) => handleNavigation(e, "Contact")}
              >
                Contact
              </Link>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <FiSearch size={20} />
                </button>

                {isSearchOpen && (
                  <div className="absolute right-0 top-12 bg-white shadow-lg rounded-md p-4 w-80 z-50">
                    <div className="flex">
                      <input
                        type="text"
                        placeholder="Search for products..."
                        className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                      <button className="bg-red-600 text-white px-4 py-2 rounded-r-md hover:bg-red-700 transition-colors">
                        <FiSearch size={18} />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Account */}
              <div className="hidden md:block relative group">
                <button className="p-2 text-gray-700 hover:text-gray-900 transition-colors">
                  <FiUser size={20} />
                </button>
                <div className="absolute right-0 w-48 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-colors"
                    onClick={(e) => handleNavigation(e, "Login")}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-colors"
                    onClick={(e) => handleNavigation(e, "Register")}
                  >
                    Create Account
                  </Link>
                  <hr className="my-2" />
                  <Link
                    to="/account"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-colors"
                    onClick={(e) => handleNavigation(e, "My Account")}
                  >
                    My Account
                  </Link>
                  <Link
                    to="/orders"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-colors"
                    onClick={(e) => handleNavigation(e, "Orders")}
                  >
                    Orders
                  </Link>
                </div>
              </div>

              {/* Wishlist */}
              <Link
                to="/wishlist"
                className="p-2 text-gray-700 hover:text-gray-900 relative transition-colors"
                onClick={(e) => handleNavigation(e, "Wishlist")}
              >
                <FiHeart size={20} />
                {wishlistItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {wishlistItems}
                  </span>
                )}
              </Link>

              {/* Cart - Now using the actual cart count from context */}
              <Link
                to="/cart"
                className="p-2 text-gray-700 hover:text-gray-900 relative transition-colors"
                onClick={(e) => handleNavigation(e, "Cart")}
              >
                <FiShoppingCart size={20} />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartItemsCount}
                  </span>
                )}
              </Link>

              {/* Mobile Menu */}
              <button
                className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors"
                  onClick={(e) => handleNavigation(e, "Home")}
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  className="text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors"
                  onClick={(e) => handleNavigation(e, "Shop")}
                >
                  Shop
                </Link>
                <Link
                  to="/pages"
                  className="text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors"
                  onClick={(e) => handleNavigation(e, "Pages")}
                >
                  Pages
                </Link>
                <Link
                  to="/blog"
                  className="text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors"
                  onClick={(e) => handleNavigation(e, "Blog")}
                >
                  Blog
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors"
                  onClick={(e) => handleNavigation(e, "Contact")}
                >
                  Contact
                </Link>
                <hr className="my-2" />
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors"
                  onClick={(e) => handleNavigation(e, "Login")}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors"
                  onClick={(e) => handleNavigation(e, "Register")}
                >
                  Create Account
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;