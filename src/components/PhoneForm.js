// src/components/PhoneForm.js
import React, { useState } from 'react';
import './PhoneForm.css';

const PhoneForm = ({ onSubmit }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(phoneNumber);
  };

  return (
    <div className="demo-request">
      <h2>Demo Request</h2>
      <p>Enter your phone number below:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your phone number..."
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="text-input"
        />
        <button type="submit" className="submit-button">
        Get a Call
        </button>
      </form>
    </div>
  );
};

export default PhoneForm;
