
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import Home from "./Home";
import about from "./About";


function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>{" "}
        <Link to="/contact">About Us</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;