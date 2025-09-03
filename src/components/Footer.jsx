import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
       <Link to=""> <img 
                 src={logo} 
                 alt="Fashion Boutique" 
                 className="nav-logo-img"
               /></Link>
        <ul className="footer-links">
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/terms">Terms of Service</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <p className="footer-copy">© 2025 Fashion Boutique. All rights reserved.</p>
      </div>
              <p className="footer-copy">Create By Rohan pagare</p>

    </footer>
  );
};

export default Footer;
