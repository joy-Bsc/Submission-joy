import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-logo">
          <div className="logo-icon">F</div>
          <span className="logo-text">Furni<span className="highlight">Flex</span></span>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>About Us</h4>
            <ul>
              <li><a href="#">Master Plan</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Invest</a></li>
              <li><a href="#">Pressroom</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Explore EEVE</h4>
            <ul>
              <li><a href="#">Unlock my Robot Power</a></li>
              <li><a href="#">Starlight</a></li>
              <li><a href="#">Robot Platform</a></li>
              <li><a href="#">EEVE Roadmap</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Community & Support</h4>
            <ul>
              <li><a href="#">Willow X Community</a></li>
              <li><a href="#">Developer & Maker Access</a></li>
              <li><a href="#">Special Cases</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Icons and Bottom Links */}
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-x-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
        <div className="footer-links-bottom">
          <a href="#">March22 Recap</a>
          <a href="#">Privacy Policy</a>
          <a href="#">General Terms</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer-country">
          <span>United States (English)</span>
        </div>
      </div>

      <div className="footer-copyright">
        <p>EEVE © 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
