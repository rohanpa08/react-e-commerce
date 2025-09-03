import React from "react";
import { Link } from "react-router-dom";

import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import logo from "../assets/images/logo.png"; 
const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Close dropdown on outside click
  React.useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest('.user-dropdown')) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [dropdownOpen]);

  return (
    <nav className="nav">
      <div className="nav-logo">
        <Link to=""> <img 
          src={logo} 
          alt="Fashion Boutique" 
          className="nav-logo-img"
        /></Link>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/cart" className="nav-link">Cart</Link>
        <Link to="/track-order" className="nav-link">Track Order</Link>
        <Link to="/place-order" className="nav-link">Place Order</Link>
        <div className="user-dropdown">
          <button
            className="user-icon-btn"
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
            onClick={() => setDropdownOpen((open) => !open)}
            tabIndex={0}
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
          >
            <FaUserCircle size={28} className="user-icon" />
          </button>
          <div
            className="dropdown-menu"
            style={{ display: dropdownOpen ? 'flex' : 'none' }}
            role="menu"
          >
            <Link to="/login" className="dropdown-link" role="menuitem" onClick={() => setDropdownOpen(false)}>Login</Link>
            <Link to="/register" className="dropdown-link" role="menuitem" onClick={() => setDropdownOpen(false)}>Register</Link>
            <Link to="/settings" className="dropdown-link" role="menuitem" onClick={() => setDropdownOpen(false)}>Settings</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
