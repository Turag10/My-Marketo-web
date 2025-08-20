import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import CategorySection from "./components/categorysection/categorysection";


function App() {
  return (
    <Router>
      <Header />
      <CategorySection />
      <main className="p-6">
       
      </main>
      
    </Router>
  );
}

export default App;
