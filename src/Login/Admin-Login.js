import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import backgroundImg from './Hospital.jpg';
import AdminNav from '../Navbar/AdminNav';

import './Admin.css'; // Import the CSS file for styling

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const proceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      const admin = { admin_Name: username, admin_Password: password };

      fetch('https://localhost:7010/api/Token/Admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(admin),
      })
        .then((res) => {
          if (res.ok) {
            return res.text(); // Return the response as text
          } else {
            throw new Error('Invalid credentials');
          }
        })
        .then((token) => {
          console.log(token); // Log the token for debugging
          sessionStorage.setItem('token', token);
          toast.success('Success');
          navigate('/');
        })
        .catch((error) => {
          console.error('Error:', error);
          toast.error(error.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (username === '' || username === null) {
      result = false;
      toast.warning('Please enter Username');
    }
    if (password === '' || password === null) {
      result = false;
      toast.warning('Please enter Password');
    }
    return result;
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
      }}
    >
      <div><AdminNav/></div>
      <div className="align">
        <div className="grid align__item">
          <div className="register">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="site__logo"
              width="56"
              height="84"
              viewBox="77.7 214.9 274.7 412"
            >
              <defs>
                <linearGradient id="a" x1="0%" y1="0%" y2="0%">
                  <stop offset="0%" stopColor="#8ceabb" />
                  <stop offset="100%" stopColor="#378f7b" />
                </linearGradient>
              </defs>
              <path
                fill="url(#a)"
                d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z"
              />
            </svg>

            <h2>Login In</h2>

            <form onSubmit={proceedLogin} className="form">
              <div className="form__field">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="form__field">
                <input
                  type="password"
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="form__field">
                <button type="submit">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
