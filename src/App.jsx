import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cart from './components/Cart'
import CartPage from './pages/CartPage'
import ProductDetails from './pages/ProductDetails'
import ProductList from './components/ProductList'
import ProductCart from './components/ProductCart'
import Login from './pages/Login';
import Register from './pages/Register';
import Settings from './pages/Settings';
import TrackOrder from './pages/TrackOrder';
import PlaceOrder from './pages/PlaceOrder';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import Footer from "./components/Footer";   // <-- new import

// (baaki components bhi import karo...)

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const isProductInCart = prevCart.find((item) => item.id === product.id);
      if (isProductInCart) {
        return prevCart; // quantity increase nahi karna
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const updateQuantity = (id, quantity) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    const storedCart = cart ? JSON.parse(cart) : [];
    setCartItems(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="app-container">
      {showNotification && (
        <div className="cart-notification">Item added to cart!</div>
      )}

      <header className="header">
        <Navbar />
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/products" element={<ProductList addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          
         
        </Routes>
      </main>

      <Footer />  
    </div>
  );
}

export default App;





// this is not html it just like this 
// this is jsx 
// useState(initialValue)