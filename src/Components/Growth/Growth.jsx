import React from 'react';
import './Growth.css';
import l1 from '../../assets/l1.png';
import timer from '../../assets/timer.png';
import complete1 from '../../assets/complete1.png';
import cup1 from '../../assets/cup1.png';

const Growth = () => {
  return (
    <div className='growth-container'>
      <div className='container1'>
        <h4>EXPERTS GROWTH</h4>
        <h2>OUR COMPANY GROWTH</h2>
      </div>
      <div className='container2'>
        <div className='growth-block'>
          <img src={l1} alt='l1' />
          <h1>199+</h1>
          <p>Satisfied Customers</p>
        </div>
        <div className='growth-block'>
          <img src={timer} alt='timer' />
          <h1>1591+</h1>
          <p>Days Of Operation</p>
        </div>
        <div className='growth-block'>
          <img src={complete1} alt='complete1' />
          <h1>283+</h1>
          <p>Complete Projects</p>
        </div>
        <div className='growth-block'>
          <img src={cup1} alt='cup1' />
          <h1>75+</h1>
          <p>Win Awards</p>
        </div>
      </div>
    </div>
  );
};

export default Growth;

