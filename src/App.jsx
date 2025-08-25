import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import CategorySection from "./components/categorysection/categorysection";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import HolidayDealsSection from "./components/HolidayDealsSection/HolidayDealsSection";
import TopCategoriesSection from "./components/TopCategorySection/TopCategorySection";
import HotSale from "./components/HotSale/HotSale";
import MensClothing from "./components/MensClothing/MensClothing";

function App() {
  return (
    <Router>
      <Header />
      <main className="p-6">
        
        <CategorySection />
        <HeroBanner />
        <HolidayDealsSection />
        <TopCategoriesSection />
        <HotSale />
        <MensClothing />
      </main>
    </Router>
  );
}

export default App;