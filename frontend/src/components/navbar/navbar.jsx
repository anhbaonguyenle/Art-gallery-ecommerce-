import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import searchIcon from '../../assets/icon/Search.png';
import cartIcon from '../../assets/icon/cart.png';
import profileIcon from '../../assets/icon/profile.png';

const Navbar = () => {

    return (
        <div className="navbar">

            <div className="logo-container">
                <Link to="/" className="logo">
                    <img src="/logo/Logo.png" alt="Logo" />
                </Link>
            </div>

            <ul className="navbar-menu">
                <li><Link to="/artwork">Artwork</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>

            <div className="right-container">
                <div className={`search-container`}>
                    <input type="text" placeholder="Search..." />
                    <img
                        src={searchIcon}
                        alt="search-icon"
                        className="icon-btn"
                    />
                </div>
                <Link to="/cart">
                    <img src={cartIcon} alt="cart" className="icon-btn" />
                </Link>
                <Link to="/user">
                    <img src={profileIcon} alt="user" className="icon-btn" />
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
