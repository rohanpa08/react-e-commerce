import React from 'react';
import Cart from '../components/Cart';
const CartPage = ({ cartItems = [], removeFromCart, updateQuantity }) => {
  const handleBuyNow = (item) => {
    // Redirect to PlaceOrder page with item info (implement as needed)
    window.location.href = '/place-order';
  };

  const handlePlaceOrder = () => {
    window.location.href = '/place-order';
  };

  return (
    <div className="cart-page-container">
      <h1 className="cart-title">Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <Cart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          onBuyNow={handleBuyNow}
          onPlaceOrder={handlePlaceOrder}
        />
      ) : (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <a href="/" className="continue-shopping-btn">Continue Shopping</a>
        </div>
      )}
    </div>
  );
};

export default CartPage;
