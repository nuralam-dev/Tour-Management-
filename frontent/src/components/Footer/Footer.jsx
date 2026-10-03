import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Brand Column */}
        <div className="footer__col">
          <div className="logo">
            <h2>
              Travel<span>World</span>
            </h2>
          </div>
          <p className="footer__desc">
            Discover extraordinary destinations with us. Create unforgettable
            memories, explore new cultures, and experience world-class travel.
          </p>
          <div className="footer__socials">
            <a href="#facebook"><i className="ri-facebook-fill"></i></a>
            <a href="#instagram"><i className="ri-instagram-line"></i></a>
            <a href="#twitter"><i className="ri-twitter-fill"></i></a>
            <a href="#youtube"><i className="ri-youtube-fill"></i></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h5 className="footer__title">Discover</h5>
          <ul className="footer__links">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/tours">Tours</Link></li>
          </ul>
        </div>

        {/* Quick Links 2 */}
        <div className="footer__col">
          <h5 className="footer__title">Quick Links</h5>
          <ul className="footer__links">
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer__col">
          <h5 className="footer__title">Contact</h5>
          <ul className="footer__contact">
            <li>
              <i className="ri-map-pin-line"></i>
              <span>Dhaka, Bangladesh</span>
            </li>
            <li>
              <i className="ri-mail-line"></i>
              <span>support@travelworld.com</span>
            </li>
            <li>
              <i className="ri-phone-fill"></i>
              <span>+0123 456 789</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <p>© {year} TravelWorld. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;