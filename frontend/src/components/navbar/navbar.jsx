import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
    <div className = "navbar">
        <div className="logo-container">
            <img src= "" alt="logo" href="/" className="logo"/>
        </div>
        <div className="navbar-container">
            <ul>
                <li><a href="/artwork"/>Artwork</li>
                <li><a href="/products"/>Products</li>
                <li><a href="/contact"/>Contact</li>
                <li><a href="/about"/>About</li>
            </ul>
        </div>
        <div className="right-container">
            <div className='search-box'>
                <input type="text" placeholder="Search..."/>
                <img src="" alt="search-icon" className="search-icon"/>
            </div>
            <div className="cart-icon">
                <img src= "" alt="cart-icon" href="/cart" className="cart"/>
            </div>
            <div className="user-icon">
                <img src= "" alt="user-icon" href="/user" className="user"/>
            </div>
        </div>
    </div>
    );
}

export default Navbar;