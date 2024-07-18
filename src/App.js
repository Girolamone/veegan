import Navbar from "./components/Navbar/navbar";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import GetData from "./components/GetData/GetData";
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero"
import "./App.css"
import RecipeDetail from "./components/RecipeDetail/RecipeDetail";
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';

function App() {
  

  return (
    <Router>
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<GetData />} />
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
