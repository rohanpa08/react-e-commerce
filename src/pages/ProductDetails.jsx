import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList'; // Import the Product List component

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="product-details-container">
      <div className="product-details">
        <img src={product.image} alt={product.title} className="product-image" />
        <div className="product-info">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-price">₹{product.price.toFixed(2)}</p>
          <div className="product-rating">
            {Array(5).fill().map((_, i) => (
              <span key={i} className={i < Math.floor(product.rating || 0) ? "star filled" : "star"}>★</span>
            ))}
            {product.rating && <span className="rating-count">({product.reviewCount} reviews)</span>}
          </div>
          <p className="product-description">{product.description}</p>
          <button 
            className="add-to-cart-btn" 
            onClick={() => addToCart(product)}
            aria-label={`Add ${product.title} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="other-products">
        <h2 className="section-title">You May Also Like</h2>
        <ProductList addToCart={addToCart} />
      </div>
    </div>
  );
};

export default ProductDetails;
