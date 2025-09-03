import React from 'react';
import ProductList from '../components/ProductList';
import '../components/style.css';
const Home = ({ addToCart }) => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="hero-title">Welcome to Fashion Boutique</h1>
        <p className="hero-subtitle">Fast delivery, best prices, and top brands!</p>
        <a href="/products" className="hero-btn">Shop Now</a>
      </section>
      
      <ProductList addToCart={addToCart} />
    </div>
  );
};

export default Home;
