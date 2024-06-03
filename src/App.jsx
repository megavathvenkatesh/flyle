

import React, { useState } from 'react';

import Hero from './Components/Hero/Hero';
import ContactForm from './Components/ContactForm/ContactForm';
import Service from './Components/Service/Service';
import Project from './Components/Project/Project';
import './App.css'; // Add this line to include the CSS for modal
import Growth from './Components/Growth/Growth';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
        
       
        <Hero onContactClick={handleContactClick} />
        {isModalOpen && <ContactForm onClose={handleCloseModal} />}
        <Service/>
        <Project />
        <Growth />
    </div>
  );
}

export default App;
