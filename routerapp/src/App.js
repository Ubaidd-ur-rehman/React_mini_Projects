import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from './components/pages/Home'
import About from './components/pages/About'
import ContactUs from './components/pages/ContactUs'
import './App.css';

function App() {
  return (
    <div className="App">
       <Router>
      <Navbar />
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </Router>
    </div>
   
  );
}

export default App;
