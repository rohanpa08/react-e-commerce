import React, { useState } from 'react';

const Cart = ({ cartItems = [], removeFromCart, updateQuantity, onBuyNow, onPlaceOrder }) => {
  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2><i className="fas fa-shopping-cart"></i> Your Shopping Cart</h2>
        <span className="item-count">{cartItems.length} item(s)</span>
      </div>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <i className="fas fa-shopping-basket"></i>
          <p>Your cart is empty</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item-image"
                />
                <div className="item-details">
                  <h4 className="item-title">{item.title}</h4>
                  <p className="item-price">₹{item.price.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button 
                      className="quantity-btn" 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button 
                      className="quantity-btn" 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="action-buttons">
                  <div className="remove-btn">
                    <button
                      className="btn-remove"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <i className="fas fa-trash"></i> Remove
                    </button>
                  </div>
                  <div className="buy-now-btn">
                    <button
                      className="btn-buy-now"
                      onClick={() => onBuyNow(item)}
                    >
                      <i className="fas fa-bolt"></i> Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>₹{cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>
              <span>₹5.00</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>₹{(cartItems.reduce((total, item) => total + (item.price * item.quantity), 0) + 5).toFixed(2)}</span>
            </div>
            
            <button className="btn-place-order" onClick={onPlaceOrder}>
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;