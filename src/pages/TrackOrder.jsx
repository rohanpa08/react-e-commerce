import React, { useState, useEffect } from "react";

const TrackOrder = () => {
  const [orders, setOrders] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [foundOrder, setFoundOrder] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false);

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(orders);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const order = orders.find(o => o.id === searchId);
    setFoundOrder(order || null);
    setSearchPerformed(true);
  };

  const clearSearch = () => {
    setSearchId("");
    setFoundOrder(null);
    setSearchPerformed(false);
  };

  // Format order status with appropriate emoji
  const getStatusEmoji = (status) => {
    switch(status?.toLowerCase()) {
      case "placed": return "📦";
      case "shipped": return "🚚";
      case "delivered": return "✅";
      case "cancelled": return "❌";
      default: return "⏳";
    }
  };

  return (
    <div className="auth-container track-order-container">
      <h2>Track My Order</h2>
      
      <form onSubmit={handleSearch} className="search-form">
        <div className="input-group">
          <input 
            type="text" 
            placeholder="Enter Order ID" 
            value={searchId} 
            onChange={e => setSearchId(e.target.value)} 
            required 
          />
          <button type="submit">Track Order</button>
        </div>
        {searchId && (
          <button type="button" onClick={clearSearch} className="clear-btn">
            Clear
          </button>
        )}
      </form>
      
      {foundOrder ? (
        <div className="order-details success-card">
          <div className="status-header">
            <span className="status-emoji">{getStatusEmoji(foundOrder.status)}</span>
            <h3>Order Found</h3>
          </div>
          
          <div className="detail-grid">
            <div className="detail-item">
              <span className="detail-label">Order ID:</span>
              <span className="detail-value">{foundOrder.id}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Shipping Address:</span>
              <span className="detail-value">{foundOrder.address}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Contact Number:</span>
              <span className="detail-value">{foundOrder.contact}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Status:</span>
              <span className={`status-badge status-${foundOrder.status.toLowerCase()}`}>
                {foundOrder.status}
              </span>
            </div>
          </div>
        </div>
      ) : searchPerformed ? (
        <div className="not-found-message">
          <p>❌ No order found with ID: "{searchId}"</p>
          <p>Please check your order ID and try again.</p>
        </div>
      ) : null}
      
      {orders.length > 0 && (
        <>
          <h4>Your Recent Orders</h4>
          <div className="orders-list">
            {orders.map(order => (
              <div key={order.id} className="order-card">
                <div className="order-card-header">
                  <span className="order-id">Order #{order.id}</span>
                  <span className={`status status-${order.status.toLowerCase()}`}>
                    {getStatusEmoji(order.status)} {order.status}
                  </span>
                </div>
                <div className="order-card-details">
                  <span className="order-info">{order.address}</span>
                  <span className="order-info">{order.contact}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      
      {orders.length === 0 && (
        <div className="empty-orders">
          <p>You haven't placed any orders yet.</p>
          <a href="/products" className="cta-link">Start Shopping →</a>
        </div>
      )}
    </div>
  );
};

export default TrackOrder;