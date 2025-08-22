import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import CategorySection from "./components/categorysection/categorysection";
import HeroBanner from "./components/HeroBanner/HeroBanner";

function App() {
  return (
    <Router>
      <Header />
      <main className="p-6">
        
        <CategorySection />
        <HeroBanner />
      </main>
    </Router>
  );
}

export default App;