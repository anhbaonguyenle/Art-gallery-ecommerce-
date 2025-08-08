import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-column">
                    <ul>
                        <li className="title"><p>About us</p></li>
                        <li><a href="about">About</a></li>
                        <li><a href="contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <ul>
                        <li className="title"><p>Ressources</p></li>
                        <li><a href="github">Github</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <ul>
                        <li className="title"><p>Partnerships</p></li>
                        <li><a href="service/galleries">F&F for Galleries</a></li>
                        <li><a href="service/events">F&F for Events</a></li>
                        <li><a href="service/Artworks">F&F for Artworks</a></li>
                        <li><a href="service/Products">F&F for Products</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-personal-link">
                <div className="Logo">
                    <a href="/">
                        <img src="" alt="logo" className="logo" />
                    </a>
                </div>
                <div className="personal-link"></div>
                <div className="note"><p>Note: The website interface is inspired by Bauhaus style.</p></div>
            </div>
        </div>
    );
}

export default Footer;
