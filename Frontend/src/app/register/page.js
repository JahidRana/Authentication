"use client";
import './register.css';
import { useState } from 'react';
import axios from 'axios'; // Import Axios for making API requests
import { useRouter } from 'next/navigation';
const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
  
      const response = await axios.post('http://localhost:5000/register', {
        email,
        password,
      });

      if (response.status === 201) {
        router.push('/login');
      } else if (response.status === 400) {
     
        console.error('Email already registered');
      } else {
       
        console.error('Registration failed');
      }
    } catch (error) {

      console.error('Error during registration:', error);
    }
  };

  return (
    <div class="reg-container">
      <h1>Registration</h1>
    <form onSubmit={handleSubmit}>
    <div class="form-elem">
      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </div>
    <div class="form-elem">
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
    </div>
   
      <button type="submit">Register</button>
  
  </form>
  </div>
  );
};

export default RegistrationForm;
