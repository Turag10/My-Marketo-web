import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TopHeader from "./components/TopHeader/TopHeader";
import Header from "./components/Header/Header";
import CategorySection from "./components/CategorySection/CategorySection";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import HolidayDealsSection from "./components/HolidayDealsSection/HolidayDealsSection";
import TopCategoriesSection from "./components/TopCategorySection/TopCategorySection";
import HotSale from "./components/HotSale/HotSale";
import MensClothing from "./components/MensClothing/MensClothing";
import { CartProvider } from "./components/CartContext/CartContext";
import WatchesSection from "./components/WatchesSection/WatchesSection";
import ProductSection from "./components/ProductSection/ProductSection";
import FooterSection from "./components/FooterSection/FooterSection";

function App() {
  return (
    <CartProvider>
      <Router>
        <TopHeader />
        <Header />
        <main className="p-6">
          <CategorySection />
          <HeroBanner />
          <HolidayDealsSection />
          <TopCategoriesSection />
          <HotSale />
          <MensClothing />
          <WatchesSection />
          <ProductSection />
          <FooterSection />
        </main>
      </Router>
    </CartProvider>
  );
}

export default App;
