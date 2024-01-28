"use client";
import './login.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();
  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.status === 200) {
        // Successful login
        // const data = await response.json();
        router.push('/profile');
    
      } else {
        // Failed login, handle the 401 Unauthorized response
        const data = await response.json();
        setMessage("Login failed: " + data.message);
      }
    } catch (error) {
      // Handle network or other errors
      console.error("An error occurred:", error);
    }
  };
  
  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
};

export default Login;
