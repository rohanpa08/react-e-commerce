import React from "react";
import { useState } from "react";

const PlaceOrder = () => {
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [notification, setNotification] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save order to localStorage for tracking
    const orderId = Date.now().toString();
    const order = { id: orderId, address, contact, status: "Placed" };
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));
    setNotification("Order placed successfully!");
    setTimeout(() => {
      setNotification("");
      window.location.href = "/track-order";
    }, 2000);
  };

  return (
    <div className="auth-container place-order-container">
      <h2>Place Order</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Shipping Address" required value={address} onChange={e => setAddress(e.target.value)} />
        <input type="text" placeholder="Contact Number" required value={contact} onChange={e => setContact(e.target.value)} />
        <button type="submit">Place Order</button>
      </form>
      {notification && <div className="cart-notification">{notification}</div>}
    </div>
  );
};

export default PlaceOrder;
