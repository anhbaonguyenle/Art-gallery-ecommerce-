import React from 'react';
import './footer.css';
import { Link

 } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-column">
          <h3>About us</h3>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li><Link to="https://github.com/anhbaonguyenle/Art-gallery-ecommerce-" target="_blank" rel="noopener noreferrer">Github</Link></li>
            <li><Link to="/figma">Figma</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Partnerships</h3>
          <ul>
            <li><Link to="/service/galleries">F&amp;F for Galleries</Link></li>
            <li><Link to="/service/events">F&amp;F for Events</Link></li>
            <li><Link to="/service/artworks">F&amp;F for Artworks</Link></li>
            <li><Link to="/service/products">F&amp;F for Product</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-right">
        <Link to="/"><img src="/logo/Logo.png" alt="Logo" /></Link>
        <p className="footer-note">
          Note: Everything on this website is not real (except About)
        </p>
      </div>
    </footer>
  );
};

export default Footer;
