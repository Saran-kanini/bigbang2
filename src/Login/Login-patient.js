import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Register.css';
import NavPatientLogin from '../Navbar/Navbarpat';

export default function PatientLogin() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [name, setName] = useState('');
  const [patient_Age, setpatient_Age] = useState('');
  const [patientNo, setPatientNo] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);
  const [patient_Name, setpatient_Name] = useState('');
  const [patientPassword, setPatientPassword] = useState('');
  const navigate = useNavigate();
  const [gender, setGender] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('imageFile', image);
    formData.append('patient_Name', name);
    formData.append('gender', gender);
    formData.append('patient_Age', patient_Age);
    formData.append('patient_No', patientNo);
    formData.append('password', password);

    if (validateRegister()) {
      try {
        const response = await fetch('https://localhost:7010/api/Patient', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            imageFile: image,
            patient_Name: name,
            gender: gender,
            patient_Age: patient_Age,
            patient_No: patientNo,
            password: password,
          }),
        });
        
        if (response.ok) {
          toast.success('Registered Successfully');
          navigate('/loginpatient');
        } else {
          throw new Error('Registration failed');
        }
      } catch (error) {
        toast.error('Failed: ' + error.message);
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (validateLogin()) {
      const patient = { patient_Name: patient_Name, password: patientPassword };

      try {
        const response = await fetch('https://localhost:7010/api/Token/Patient', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(patient),
        });

        if (response.ok) {
          const token = await response.text();
          sessionStorage.setItem('token', token);
          toast.success('Login Successful');
          navigate('/homepatient');
        } else {
          throw new Error('Invalid credentials');
        }
      } catch (error) {
        console.error('Error:', error);
        toast.error(error.message);
      }
    }
  };

  const validateRegister = () => {
    let result = true;
    let errorMessage = 'Please enter a value in ';

    if (!name) {
      result = false;
      errorMessage += 'Name, ';
    }
    if (!gender) {
      result = false;
      errorMessage += 'gender, ';
    }
    if (!patient_Age) {
      result = false;
      errorMessage += 'gender Description, ';
    }
    if (!patientNo) {
      result = false;
      errorMessage += 'Patient No, ';
    }
    if (!password) {
      result = false;
      errorMessage += 'Password, ';
    }
  

   
    return result;
  };

  const validateLogin = () => {
    let result = true;
    if (!patient_Name) {
      result = false;
      toast.warning('Please enter Username');
    }
    if (!patientPassword) {
      result = false;
      toast.warning('Please enter password');
    }
    return result;
  };

  return (
    <div>
      <NavPatientLogin />
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
                    <label htmlFor="patient_Name" className="label">
                      Patient Name
                    </label>
                    <input
                      id="patient_Name"
                      type="text"
                      className="input"
                      value={patient_Name}
                      onChange={(e) => setpatient_Name(e.target.value)}
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="patientpassword" className="label">
                      Password
                    </label>
                    <input
                      id="patientpassword"
                      type="password"
                      className="input"
                      data-type="password"
                      value={patientPassword}
                      onChange={(e) => setPatientPassword(e.target.value)}
                    />
                  </div>
                  <div className="group">
                    <input type="submit" className="button" value="Sign In" />
                  </div>
                  <div className="hr"></div>
                  <div className="foot-lnk">
                    <a href="#forgot">Forgot password?</a>
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
                    <label className="label">Gender</label>
                    <div className="radio-group">
                      <label style={{padding:20}}>
                        <input
                          type="radio"
                          value="Male"
                          checked={gender === 'Male'}
                          onChange={(e) => setGender(e.target.value)}
                        />
                        Male
                      </label>
                      <label>
                        <input
                          type="radio"
                          value="Female"
                          checked={gender === 'Female'}
                          onChange={(e) => setGender(e.target.value)}
                        />
                        Female
                      </label>
                    </div>
                  </div>
                  <div className="group">
                    <label htmlFor="patient_Age" className="label">
                      Age
                    </label>
                    <input
                      id="patient_Age"
                      type="text"
                      className="input small-input"
                      value={patient_Age}
                      onChange={(e) => setpatient_Age(e.target.value)}
                    />
                  </div>
                  <div className="group ">
                    <label htmlFor="patientNo" className="label">
                      Patient No
                    </label>
                    <input
                      id="patientNo"
                      type="text"
                      className="input small-input"
                      value={patientNo}
                      onChange={(e) => setPatientNo(e.target.value)}
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
