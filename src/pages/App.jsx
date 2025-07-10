  import React from "react";
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import Layout from "./Layout";
  import Home from "./Home";
  import About from "./About";
  import Products from "./Products";
  import Contact from "./Contact";

  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    );
  }

  export default App;
