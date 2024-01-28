"use client";
import './contact.css'
import React, { useState } from 'react';
import axios from 'axios';


// or via CommonJS


function ContactForm() {
  const Swal = require('sweetalert2')
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/contact', {
        name,
        email,
        message,
      });

      if (response.data.success) {
        setSuccessMessage('Form submission successful'); // Set the success message
        Swal.fire({
          title: "Message Sent!",
         
          icon: "success"
        });
      } else {

        console.error('Error:', response.data.error);
      }
    } catch (error) {
      // Handle errors (e.g., display an error message)
      console.error('Error:', error);
    }
  };

  return (
    <div className="form-style-6">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="field1"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="field2"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="field3"
          placeholder="Type your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <input type="submit" value="Send" />
      </form>
       {/* Display success message */}
       {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
}

export default ContactForm;
