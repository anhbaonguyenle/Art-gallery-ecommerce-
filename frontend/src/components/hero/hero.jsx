import React from 'react';
import './hero.css';
import heroImage from '../../assets/hero/Hero.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-image-container">
        <img src={heroImage} alt="Geometric Art" className="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
