import React from 'react';
import './Project.css';
import image5 from '../../assets/image5.png';

const Project = () => {
  return (
    <div className='container'>
        <div className='project'>
            <h3>OUR PROJECT</h3>
            <h2>WHY WE ARE BEST</h2>
            <div className='image5'>
            <img src={image5} alt='image5' />
            <div className='container2'>
                <div className='box'>
                    <h4>Genderless Kei-japan's Hot</h4>
                    <p>Genderless Kei is a popular fashion trend in Japan that blends traditionally masculine and feminine styles.</p>
                </div>
                <div className='box highlighted'>
                    <h4>Better Strategy & Quality</h4>
                    <p>Better Strategy & Quality focuses on enhancing business outcomes through strategic planning and high-quality execution.</p>
                </div>
                <div className='box'>
                    <h4>Genderless Kei-japan's Hot</h4>
                    <p>Genderless Kei is a popular fashion trend in Japan that blends traditionally masculine and feminine styles.</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Project;

