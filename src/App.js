import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Doctor from './Models/Doctor';
import Patient from './Models/Patient';
import Admin from './Models/Admin';
import Home from './Models/Home';
import Register from './Login/Register';
import { NavDropdown } from 'react-bootstrap';
import PatientLogin from './Login/Login-patient';
import AdminLogin from './Login/Admin-Login';
import HomePatient from './Home/HomePatient';
import HomeDoctor from './Home/HomeDoctor';
import Doctorview from './View/Doctorview';
import PatientView from './View/Patientview';
import Docpatient from './View/Docpatient';
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/loginpatient" element={<PatientLogin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/homepatient" element={<HomePatient />} />
          <Route path="/homedoctor" element={<HomeDoctor />} />
          <Route path="/docview" element={<Doctorview />} />
          <Route path="/patview" element={<PatientView />} />
          <Route path="/docpat" element={<Docpatient/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
