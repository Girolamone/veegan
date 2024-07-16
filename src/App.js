import Navbar from "./navbar";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import GetData from "./components/GetData";
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from "./components/Footer";
import Hero from "./components/Hero"
import "./App.css"
import RecipeDetail from "./components/RecipeDetail";
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    setSubmittedQuery(searchQuery);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearchSubmit();
    }
  }

  return (
    <Router>
    
    <div className="App">
      
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div className="searchbox--total">
        <input
          className="searchbar"
          placeholder="Enter Ingredients from your Fridge"
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
        />
        <button className="search-button" onClick={handleSearchSubmit}>Search</button>
      </div>
      <div className="main-content">
      <Routes>
          <Route path="/" element={<GetData searchQuery={submittedQuery} />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
