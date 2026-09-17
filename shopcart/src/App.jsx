import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Services from "./pages/Services";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  function handleAddToCart(product) {
    setCart([...cart, product]);
  }

  function handleRemoveFromCart(index) {
    setCart(cart.filter((_, i) => i !== index));
  }

  return (
    <Router>
      <Navbar cart={cart} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              handleAddToCart={handleAddToCart}
            />
          }
        />

        <Route
          path="/categories"
          element={<Categories />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;