import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap';

export default function Navbardoc() {
  return (
    <div>
        <div> <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/homedoctor" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/docview" activeClassName="active">
                Doctor
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/patview" activeClassName="active">
                Patient
              </NavLink>
            </li>
            <NavDropdown title="Register" id="register-dropdown">
              <NavDropdown.Item as={NavLink} to="/register" activeClassName="active">
                Register Doctor
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/loginpatient" activeClassName="active">
                Register Patient
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/adminlogin" activeClassName="active">
                Login Admin
              </NavDropdown.Item>
            </NavDropdown>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/login" activeClassName="active">
                Login
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav></div>
    </div>
  )
}
