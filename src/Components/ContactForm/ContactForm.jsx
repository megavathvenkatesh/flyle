import React from 'react';
import './ContactForm.css'

const ContactForm = ({ onClose }) => {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <h3>Talk to me</h3>
        <span className='close' onClick={onClose}>&times;</span>
        <form action="https://getform.io/f/pbmqoqyb" method="POST" enctype="multipart/form-data">
          <input type="email" name="email" placeholder="Email" required />
          <div className='name-fields'>
            <input type="text" name="first_name" placeholder="First Name" required />
            <input type="text" name="last_name" placeholder="Last Name" required />
          </div>
          <div>
            <input type="checkbox" name="agree" required />
            <label htmlFor="agree"> I agree to the terms and conditions</label>
          </div>
          <button type="submit">Contact Us</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
