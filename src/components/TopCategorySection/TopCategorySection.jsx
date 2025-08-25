import React, { useState, useEffect } from "react";
import productsData from "../../data/products.json";


const TopCategorySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setProducts(productsData.products || []);
      setLoading(false);
    } catch (error) {
      console.error("Error loading products:", error);
      setLoading(false);
    }
  }, []);

  // Categories
  const allCategories = ["All", ...new Set(products.map((p) => p.category))];

  // Filter products
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  if (loading) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">Loading products...</p>
      </div>
    );
  }

  return (
    <div className="mb-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          TOP CATEGORIES THIS WEEK
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`pb-1 text-sm md:text-base font-medium transition-colors border-b-2 ${
                selectedCategory === category
                  ? "text-blue-600 border-blue-600"
                  : "text-gray-600 border-transparent hover:text-blue-500 hover:border-blue-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Product List */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">No products found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="flex items-center border border-gray-100 rounded-md p-3 bg-white/90 relative"
            >
              {/* Wishlist Button */}
              <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-sm hover:bg-red-50 transition-colors">
                <svg
                  className="w-5 h-5 text-gray-500 hover:text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>

              {/* Product Image */}
              <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded-md relative group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition duration-300 group-hover:brightness-110 group-hover:shadow-[0_0_12px_rgba(0,0,0,0.3)]"
                />
              </div>

              {/* Product Info */}
              <div className="ml-4 flex-1">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 hover:text-blue-600 cursor-pointer line-clamp-1">
                  {product.name}
                </h3>

                {/* Prices */}
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-base font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Discount % */}
                {product.originalPrice > product.price && (
                  <span className="text-xs text-red-600 font-medium">
                    {Math.round(
                      ((product.originalPrice - product.price) /
                        product.originalPrice) *
                        100
                    )}
                    % OFF
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopCategorySection;
