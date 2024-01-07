import React from "react";
import { Link } from "react-router-dom";
import "../styles/HeaderFooter.css";

const Header = ({ user }) => {
  return (
    <header className="header">
      <nav className="nav-links">
        <p className="text-lg mr-4">
          Welcome, <b>{user.displayName}</b>!
        </p>
        <Link to="/PaginationCounter/counter" className="nav-link">
          Counter
        </Link>
        <Link to="/PaginationCounter/product" className="nav-link">
          Products
        </Link>
        <div className="header-actions">
          <Link to="/PaginationCounter" className="header-button">
            Signout
          </Link>
        </div>
      </nav>
    </header>
  );
};

const Footer = ({ user }) => {
  const userEmail = user ? user.email : null;

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: nabhannisham5@gmail.com</p>
          <p>Phone: +91 7025204337</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://github.com/NabhanNisham"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/nabhan-nisham-k-m-267027230/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/nabhan___nisham/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <p className="footer-copyright">
        © 2024 Nabhan Nisham KM. All rights reserved.
      </p>
    </footer>
  );
};

export { Header, Footer };
