import React, { useState, useEffect } from 'react';
import ProductCart from './ProductCart';
import './style.css';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list-container">
      <h2 className="product-list-title">Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCart key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
