import React from 'react';
import './Hero.css';
import hero from '../../assets/hero.png';

const Hero = ({ onContactClick }) => {
  return (
    <div className='hero'>
        <div className='hero-content'>
            <h3>AWARD WINNING</h3>
            <h1>DIGITAL MARKETING AGENCY</h1>
            <p>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at fringilla ac purus. Morbi sed lacus nec risus finibus feugiat et fermentum.</p>
            <button className='hero-btn' onClick={onContactClick}>Contact us</button>
        </div>
        <div className='hero-image'>
            <img src={hero} alt='Hero' />
        </div>
    </div>
  );
}

export default Hero;
