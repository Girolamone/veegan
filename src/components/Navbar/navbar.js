import React from "react";
import { Link } from 'react-router-dom'
import "../../App.css"

const Navbar = () => {
    return (

 <nav className="navbar" role="navigation">
    <div className="navbar-left">
      <Link to="/" className="logo">Veegana
      </Link>
    </div>
    <div className="navbar-right">
    <ul className="nav-links">
    <li><Link to="/about">About Us</Link></li>    
    <li><Link to="/contact">Contact</Link></li>    
    </ul>    
    </div>  

 </nav>

);
};

export default Navbar;