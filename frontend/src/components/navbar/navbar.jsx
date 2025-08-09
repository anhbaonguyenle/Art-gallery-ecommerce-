import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo-container">
                <a href="/">
                    <img src="public/logo/logo.png" alt="logo" className="logo" />
                </a>
            </div>
            <div className="navbar-container">
                <ul>
                    <li><a href="artwork">Artwork</a></li>
                    <li><a href="products">Products</a></li>
                    <li><a href="contact">Contact</a></li>
                    <li><a href="about">About</a></li>
                </ul>
            </div>
            <div className="right-container">
                <div className="search-box">
                    <input type="text" placeholder="Search..." />
                    <img src="" alt="search-icon" className="search-icon" />
                </div>
                <div className="cart-icon">
                    <a href="/cart">
                        <img src="" alt="cart-icon" className="cart" />
                    </a>
                </div>
                <div className="user-icon">
                    <a href="/user">
                        <img src="" alt="user-icon" className="user" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
