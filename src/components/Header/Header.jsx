import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        {/* Logo Section */}
        <div className="logo">
          <div className="logo-icon">F</div>
          <span className="logo-text">Furni<span className="highlight">Flex</span></span>
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#" className="active">Products</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">Custom</a></li>
          <li><a href="#">Blog</a></li>
        </ul>

        {/* Cart and Profile Section */}
        <div className="right-icons">
          <div className="cart">
          <Link to="/cart">
            < img src="https://img.icons8.com/ios-filled/50/000000/shopping-bag.png" alt="Cart" />
            <span className="cart-count">2</span>
            </Link>
          </div>
          <div className="user-profile">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User Profile" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
