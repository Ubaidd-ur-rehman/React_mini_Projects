// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/Home" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/About" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/ContactUs" className="nav-link">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
