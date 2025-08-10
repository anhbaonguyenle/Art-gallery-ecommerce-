import React from 'react';
import './navbar.css';

const Navbar = () => {

    return (
        <div className="navbar">

            <div className="logo-container">
                <a href="/" className="logo">
                    <img src="/logo/Logo.png" alt="Logo" />
                </a>
            </div>

            <ul className="navbar-menu">
                <li><a href="/artwork">Artwork</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/about">About</a></li>
            </ul>

            <div className="right-container">
                <div className={`search-container`}>
                    <input type="text" placeholder="Search..." />
                    <img
                        src="/icon/Search.png"
                        alt="search-icon"
                        className="icon-btn"
                    />
                </div>
                <a href="/cart">
                    <img src="/icon/cart.png" alt="cart" className="icon-btn" />
                </a>
                <a href="/user">
                    <img src="/icon/profile.png" alt="user" className="icon-btn" />
                </a>
            </div>
        </div>
    );
};

export default Navbar;
