import React from 'react';
import { Link } from 'react-router-dom';

const ProductCart = ({ product, addToCart }) => {
  return (
    <div className="card product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="image-container">
          <img src={product.image} alt={product.title} className="card-img-top" />
        </div>
        <div className="card-body text-center">
          <h3 className="card-title">{product.title}</h3>
          <p className="card-text price">₹{product.price}</p>
        </div>
      </Link>
      <div className="card-footer text-center">
        <button className="btn btn-warning" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
