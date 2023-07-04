import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Variables } from '../Variables';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import hospital from './1556286612623.jpeg';
import doctor from './Doctorhome.jpg';
import patient from './patient.jpg';
import Navbar from './Navbar';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [],
      searchValue: '',
      pendingRequests: 0,
    };
  }

  componentDidMount() {
    this.fetchDoctors();
    this.fetchDoctorscount();
  }

  fetchDoctors() {
    axios
      .get(Variables.API_URL + 'Doctor')
      .then((response) => {
        const doctors = response.data;
        this.setState({ doctors });
      })
      .catch((error) => {
        console.error('Error fetching doctors:', error);
      });
  }

  fetchDoctorscount() {
    axios
      .get(Variables.API_URL + 'Admin/DoctorRequests')
      .then((response) => {
        const requests = response.data;
        this.setState({ pendingRequests: requests.length });
      })
      .catch((error) => {
        console.error('Error fetching doctor requests:', error);
      });
  }

  render() {
    const { doctors, searchValue } = this.state;

    const filteredDoctors = doctors.filter((doctor) =>
      doctor.specialization.toLowerCase().includes(searchValue.toLowerCase())
    );

    const totalDoctors = doctors.length;
    const totalPatients = doctors.reduce((count, doctor) => count + doctor.patients.length, 0);

    return (
      <div>
        <Navbar />
        <h1 className="App">
          <img src={hospital} className="hospital-icon" alt="Hospital Logo" />
          Kanini Hospital
        </h1>
        <Carousel>
          {doctors.map((doctor) => (
            <Carousel.Item key={doctor.doctor_Id}>
              <img className="d-block" src={`data:image/jpeg;base64,${doctor.imageData}`} alt="Doctor" />
              <Carousel.Caption>
                <h3>{doctor.doctor_Name}</h3>
                <p>{doctor.specialization}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <br />
        <div className="hos-p">
          <div className="container white-color">
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div
                  className="statistic-block icon-lg wow fadeInUp"
                  data-wow-delay="0.4s"
                  style={{
                    boxShadow: '0 6px 31px 0 rgb(46 56 220 / 39%)',
                    borderRadius: '5px',
                    transition: 'all 300ms linear 0s',
                    backgroundColor: '#fff',
                    padding: '10px',
                  }}
                >
                  <h5 className="statistic-number" style={{ color: '#672e90' }}>
                    5,00,000+
                  </h5>
                  <p className="txt-400" style={{ color: '#672e90', fontWeight: 600 }}>
                    PATIENTS BENEFITED BY BE WELL
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div
                  className="statistic-block icon-lg wow fadeInUp"
                  data-wow-delay="0.6s"
                  style={{
                    boxShadow: '0 6px 31px 0 rgb(46 56 220 / 39%)',
                    borderRadius: '5px',
                    transition: 'all 300ms linear 0s',
                    backgroundColor: '#fff',
                    padding: '10px',
                  }}
                >
                  <h5 className="statistic-number" style={{ color: '#672e90' }}>
                    10,000+
                  </h5>
                  <p className="txt-400" style={{ color: '#672e90', fontWeight: 600 }}>
                    HEALTH CHECKUP DONE
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div
                  className="statistic-block icon-lg wow fadeInUp"
                  data-wow-delay="0.8s"
                  style={{
                    boxShadow: '0 6px 31px 0 rgb(46 56 220 / 39%)',
                    borderRadius: '5px',
                    transition: 'all 300ms linear 0s',
                    backgroundColor: '#fff',
                    padding: '10px',
                  }}
                >
                  <h5 className="statistic-number" style={{ color: '#672e90' }}>
                    30,000+
                  </h5>
                  <p className="txt-400" style={{ color: '#672e90', fontWeight: 600 }}>
                    SUCCESSFUL SURGERIES PERFORMED
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div
                  className="statistic-block icon-lg wow fadeInUp"
                  data-wow-delay="1s"
                  style={{
                    boxShadow: '0 6px 31px 0 rgb(46 56 220 / 39%)',
                    borderRadius: '5px',
                    transition: 'all 300ms linear 0s',
                    backgroundColor: '#fff',
                    padding: '10px',
                  }}
                >
                  <h5 className="statistic-number" style={{ color: '#672e90' }}>
                    3,000+
                  </h5>
                  <p className="txt-400" style={{ color: '#672e90', fontWeight: 600 }}>
                    BABIES BORN
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="statistics-container">
          <div className="card-container">
            <div className="card">
              <h3>Statistics</h3>
              <div className="statistics-item">
                <p className="statistics-label">Total Doctors:</p>
                <p className="statistics-value">{totalDoctors}</p>
              </div>
              <div className="statistics-item">
                <p className="statistics-label">Pending Requests:</p>
                <p className="statistics-value">{this.state.pendingRequests}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card-container">
          <div className="card">
            <img className="card-image" src={patient} alt="Patient" />
            <div className="card-body">
              <h5 className="card-title">Patients</h5>
              <Link to="/patient" className="btn btn-primary">
                View Patients
              </Link>
            </div>
          </div>
          <div className="card">
            <img className="card-image" src={doctor} alt="Doctor" />
            <div className="card-body">
              <h5 className="card-title">Doctors</h5>
              <Link to="/admin" className="btn btn-primary">
                View Doctors
              </Link>
            </div>
          </div>
        </div>

        <section class="nh-pillarpage-section"><h2>Latest Blogs <small>Find the latest blogs from our experts</small></h2>  

  <div class="blogs-news-events">
    
  </div>
</section>

        <div className="container mb-4">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2367844454413!2d80.24518431482235!3d13.043095090824986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f17e9dab9b3%3A0x7d4ce8f9631a8b61!2sSooriya%20Hospital!5e0!3m2!1sen!2sin!4v1625227856491!5m2!1sen!2sin"
            frameBorder="0"
            style={{ border: 0, width: '100%', height: '350px' }}
            allowFullScreen
          ></iframe>
        </div>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="footer-item">
                  <h4>Contact</h4>
                  <p>Email: info@kaninihospital.com</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-item">
                  <h4>Follow Us</h4>
                  <ul className="social-icons">
                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-item">
                  <p className="footer-copyright">
                    &copy; {new Date().getFullYear()} Kanini Hospital. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
