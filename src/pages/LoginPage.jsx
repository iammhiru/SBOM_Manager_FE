// src/components/LoginPage.jsx
import React, { useState } from 'react';
import '../css/Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Notification from '../components/Notification';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('Project Manager');
  const [notification, setNotification] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Determine the endpoint based on the user type
    const endpoint = userType === 'Project Manager' 
      ? 'http://localhost:3000/api/v1/projectManager/login' 
      : 'http://localhost:3000/api/v1/user/login';

    try {
      // Send the POST request with axios
      const response = await axios.post(endpoint, { email, password });

      // Handle the response from the server
      if (response.data.status === 0) {
        console.log('Login successful:', response.data);
        // Handle successful login (e.g., save token, navigate to dashboard)
        localStorage.setItem('apiSecret', response?.data?.data?.apiSecret);
        localStorage.setItem('projectManagerId', response?.data?.data?.projectManagerId);
        setNotification({ message: 'Login successful!', type: 'success' });
        setTimeout(() => navigate('/dashboardProjectManager/project'), 500); // Redirect after 1 second
      } else {
        console.error('Login failed');
        // Handle login failure (e.g., display error message)
        setNotification({ message: 'Invalid email or password', type: 'error' });
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle error (e.g., display network error message)
      setNotification({ message: 'An error occurred. Please try again.', type: 'error' });
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
      <form onSubmit={handleSubmit} className="login-form">
        <label className="login-label">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
            aria-label="Email"
            required
          />
        </label>
        <label className="login-label">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            aria-label="Password"
            required
          />
        </label>
        <label className="login-label">
          User Type:
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="login-select"
            aria-label="User Type"
          >
            <option value="Project Manager">Project Manager</option>
            <option value="Developer">Developer</option>
          </select>
        </label>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
