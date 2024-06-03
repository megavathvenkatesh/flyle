import React from 'react';
import './service.css';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';

const Service = () => {
  return (
    <div className='container'>
      <div className='text-content'>
        <h3>WHAT WE DO</h3>
        <h2>SERVICES PROVIDED FOR YOU</h2>
        <p>
          Digital marketing services encompass a range of strategies and techniques
          used to promote products or brands online, including SEO,
          social media marketing, and email campaigns.</p>
          <div className='images'>
        <img src={image1} alt='image1' />
        <img src={image2} alt='image2' />
        <img src={image3} alt='image3' />
        <img src={image4} alt='image4' />
      </div>
      </div>
    </div>
  );
}

export default Service;

