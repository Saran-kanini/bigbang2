
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap';


export class Navpatient extends Component {
  render() {
    return (
      <div> <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/homepatient" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/appointment" activeClassName="active">
                Appointment
              </NavLink>
            </li>
            <NavDropdown title="Register" id="register-dropdown">
              <NavDropdown.Item as={NavLink} to="/register" activeClassName="active">
                Register Doctor
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/loginpatient" activeClassName="active">
                Register Patient
              </NavDropdown.Item>
            </NavDropdown>
            
          </ul>
        </div>
      </div>
    </nav></div>
    )
  }
}

export default Navpatient