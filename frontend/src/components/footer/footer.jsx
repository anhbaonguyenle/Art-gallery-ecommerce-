import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Left section */}
      <div className="footer-left">
        <div className="footer-column">
          <h3>About us</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a></li>
            <li><a href="/figma">Figma</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Partnerships</h3>
          <ul>
            <li><a href="/service/galleries">F&amp;F for Galleries</a></li>
            <li><a href="/service/events">F&amp;F for Events</a></li>
            <li><a href="/service/artworks">F&amp;F for Artworks</a></li>
            <li><a href="/service/products">F&amp;F for Product</a></li>
          </ul>
        </div>
      </div>

      {/* Right section */}
      <div className="footer-right">
        <div className="footer-logo">
          <h1>F&amp;F</h1>
          <hr />
          <span>Frame and Flourish</span>
        </div>
        <p className="footer-note">
          Note: Everything on this website is not real (except About)
        </p>
      </div>
    </footer>
  );
};

export default Footer;
