import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Register.css';
import NavDocLogin from '../Navbar/NavDocLogin';

export default function DoctorAuth() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [name, setName] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);
  const [doctorName, setDoctorName] = useState('');
  const [doctorPassword, setDoctorPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append('imageFile', image);
    formData.append('doctor.Doctor_Name', name);
    formData.append('doctor.Specialization', selectedSpecialization);
    formData.append('doctor.Doctor_Email', email);
    formData.append('doctor.Contact_No', contactNo);
    formData.append('doctor.Password', password);

    if (validateRegister()) {
      fetch('https://localhost:7010/api/Doctor', {
        method: 'POST',
        body: formData,
      })
        .then((res) => {
          if (res.ok) {
            toast.success('Registered Successfully');
            navigate('/register');
          } else {
            throw new Error('Registration failed');
          }
        })
        .catch((err) => {
          toast.error('Failed: ' + err.message);
        });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateLogin()) {
      const admin = { Doctor_Name: doctorName, Password: doctorPassword };

      fetch('https://localhost:7010/api/Token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(admin),
      })
        .then((res) => {
          if (res.ok) {
            return res.text();
          } else {
            throw new Error('Invalid credentials');
          }
        })
        .then((token) => {
          sessionStorage.setItem('token', token);
          toast.success('Login Successful');
          navigate('/homedoctor');
        })
        .catch((error) => {
          console.error('Error:', error);
          toast.error(error.message);
        });
    }
  };

  const validateRegister = () => {
    let result = true;
    let errorMessage = 'Please enter a value in ';

    if (name === null || name === '') {
      result = false;
      errorMessage += 'Name, ';
    }
    if (selectedSpecialization === null || selectedSpecialization === '') {
      result = false;
      errorMessage += 'Specialization, ';
    }
    if (email === null || email === '') {
      result = false;
      errorMessage += 'Email, ';
    }
    if (contactNo === null || contactNo === '') {
      result = false;
      errorMessage += 'Contact No, ';
    }
    if (password === null || password === '') {
      result = false;
      errorMessage += 'Password, ';
    }
    if (image === null) {
      result = false;
      errorMessage += 'Image, ';
    }

    if (!result) {
      toast.warning(errorMessage.slice(0, -2));
    } else {
      if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
        result = false;
        toast.warning('Please enter a valid email');
      }
    }
    return result;
  };

  const validateLogin = () => {
    let result = true;
    if (doctorName === '' || doctorName === null) {
      result = false;
      toast.warning('Please enter Username');
    }
    if (doctorPassword === '' || doctorPassword === null) {
      result = false;
      toast.warning('Please enter Password');
    }
    return result;
  };

  return (
    <div>
      <NavDocLogin />
      <div className="login-wrap">
        <div className="login-html">
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
            checked={isSignIn}
            onChange={() => setIsSignIn(true)}
          />
          <label htmlFor="tab-1" className="tab">
            Sign In
          </label>
          <input
            id="tab-2"
            type="radio"
            name="tab"
            className="sign-up"
            checked={!isSignIn}
            onChange={() => setIsSignIn(false)}
          />
          <label htmlFor="tab-2" className="tab">
            Sign Up
          </label>
          <div className="login-form">
            {isSignIn ? (
              <div className="sign-in-htm">
                <form onSubmit={handleLogin} className="container">
                  <div className="group">
                    <label htmlFor="doctorName" className="label">
                      Username
                    </label>
                    <input
                      id="doctorName"
                      type="text"
                      className="input"
                      value={doctorName}
                      onChange={(e) => setDoctorName(e.target.value)}
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="doctorPassword" className="label">
                      Password
                    </label>
                    <input
                      id="doctorPassword"
                      type="password"
                      className="input"
                      data-type="password"
                      value={doctorPassword}
                      onChange={(e) => setDoctorPassword(e.target.value)}
                    />
                  </div>
                  <div className="group">
                    <input type="submit" className="button" value="Sign In" />
                  </div>
                  <div className="hr"></div>
                  <div className="foot-lnk">
                    <a href="#forgot">Forgot Password?</a>
                  </div>
                </form>
              </div>
            ) : (
              <div className="sign-up-htm">
                <form onSubmit={handleRegister} className="container">
                  <div className="group">
                    <label htmlFor="name" className="label">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="input small-input"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="specialization" className="label">
                      Specialization
                    </label>
                    <select
  id="specialization"
  className="input small-input"
  value={selectedSpecialization}
  onChange={(e) => setSelectedSpecialization(e.target.value)}
  style={{ color: '#000', backgroundColor: '#ffff' }}
                    >
                      <option value="">Select specialization</option>
                      <option value="Cardiology">Cardiology</option>
                      <option value="Diabetology">Diabetology</option>
                      <option value="Gastroenterology">Gastroenterology</option>
                      <option value="Neurology">Neurology</option>
                      <option value="Orthopedics">Orthopedics</option>
                      <option value="Pediatrics">Pediatrics</option>
                      <option value="Psychiatry">Psychiatry</option>
                    </select>
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="label">
                      Email
                    </label>
                    <input
                      id="email"
                      type="text"
                      className="input small-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="contactNo" className="label">
                      Contact No
                    </label>
                    <input
                      id="contactNo"
                      type="text"
                      className="input small-input"
                      value={contactNo}
                      onChange={(e) => setContactNo(e.target.value)}
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="password" className="label">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      className="input small-input"
                      data-type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="image" className="label">
                      Image
                    </label>
                    <input
                      id="image"
                      type="file"
                      className="input small-input"
                      onChange={handleImageChange}
                    />
                  </div>
                  <div className="group">
                    <input type="submit" className="button" value="Sign Up" />
                  </div>
                  <div className="hr"></div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
