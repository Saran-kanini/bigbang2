import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Variables } from '../Variables';
import './HomeDoctor.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import hospital from './1556286612623.jpeg';
import doctor from './Doctorhome.jpg';
import patient from './patient.jpg';
import Navbardoc from '../Navbar/Navbardoc';
import hos from './Hospital.jpg'
import icu from './ICU.jpg'
import blood from './blood.jpg'
import ambulance from './ambulance.jpg'
import glucose from './glucose.jpeg'
import cardio from './cardio.jpg'
import diabet from './diabet.jpg'
import eye from './eye.jpg'
import kidney from './kidney.jpg'
import ortho from './ortho.jpg'
import pul from './pul.jpg'

export default class HomePatient extends Component {
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
        <Navbardoc/>
        <h1 className="App">
          <img src={ambulance} className="hospital-icon" alt="Hospital Logo" />
          Medway Hospital
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
        </div><br/><br/>
            <div className="container hp-sec9">
              <div id="myCarousel" className="carousel slide brach-slide" data-ride="carousel" data-interval={60000}>
                <div className="carousel-inner branch-height branch-container">
                  <div className="item active">
                    <div className="row">
                      <div className="col-md-6 col-xs-12 branch-img">
                        <img src={hos} style={{ width: '100%' }} className='img1' alt="Medway Hospitals Kodambakkam" />
                      </div>
                      <div className="col-md-6 col-xs-12 branch-quotes">
                        <div className="hp-branch-wrap_new">
                          <h3>Medway Hospitals</h3>
                          <p className="p-roboto p-content">
                            Medway Hospitals, Kodambakkam commenced operations in August 2017 and serves as the foundational core of the Medway Group Of Hospitals, seamlessly integrating routine healthcare and medical emergencies in the busy neighborhood situated in South Chennai.The hospital has a modern infrastructure equipped with the latest medical technology. We are committed to providing the highest quality of healthcare for our patients. With a core specialization in diabetology and cardiology, Medway is known for offering high-class treatment with advanced technologies. Excellence in cardiology
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Add other carousel items here */}
                </div>
              
              </div>
          </div>


  <div className="card-container"style={{ display: 'flex', justifyContent: 'center' }}>
  <div className="card">
    <img className="cardimg" src={patient} alt="Patient" />
    <div className="card-body">
      <h5 className="card-title">Patients</h5>
      <Link to="/patient" className="btn btn-primary">
        View Patients
      </Link>
    </div>
    </div>
  <div className="card ">
    <img className="cardimg" style={{width:250, marginLeft:200, marginRight:10}} src={doctor} alt="Doctor" />
    <div className="card-body">
      <h5 className="card-title">Doctors</h5>
      <Link to="/docview" className="btn btn-primary">
        View Doctors
      </Link>
    </div>
  </div>
</div>
       <br/>
       <section className="hp-sec5">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>
              Our Specialties<span style={{ color: '#6ca836' }}></span>
            </h3>
          </div>
          {/* <div className="col-md-6 col-xs-6 p-roboto p-content view_all mb-30 pt-30">
            <a href="specialties.php">View All</a>
          </div> */}
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="hp-sp_sec_inner-index">
              <img src={cardio} style={{width:300 ,height:200}} className="cardimg" />
              <div className="hp-sp_content_index_page">
                <h5>
                  <a href="cardiology.php">Cardiology</a>
                </h5>
                <p className="p-roboto sp_p">
                  Our Cardiology department is equipped with all the latest medical technologies to address the needs of the cardiac patients.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="hp-sp_sec_inner-index">
              <img src={diabet} style={{width:300 ,height:200}} className="cardimg" />
              <div className="hp-sp_content_index_page">
                <h5>
                  <a href="diabetology.php">Diabetology</a>
                </h5>
                <p className="p-roboto">
                  Our diabetologists are highly trained and qualified to provide comprehensive care to the patients.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="hp-sp_sec_inner-index">
              <img src={eye} style={{width:200}} className="cardimg" />
              <div className="hp-sp_content_index_page">
                <h5>
                  <a href="nephrology.php">Nephrology</a>
                </h5>
                <p className="p-roboto">
                  Our nephrologists and urologists work together to diagnose and treat the full spectrum of kidney-related conditions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="hp-sp_sec_inner-index">
              <img src={kidney} style={{width:200}} className="cardimg" />
              <div className="hp-sp_content_index_page">
                <h5>
                  <a href="ophthalmology.php">Ophthalmology</a>
                </h5>
                <p className="p-roboto">
                  Our ophthalmology team works with specialists of all disciplines to ensure the safe and effective performance of the procedures.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="hp-sp_sec_inner-index">
              <img src={ortho} style={{width:200}}  className="cardimg" />
              <div className="hp-sp_content_index_page">
                <h5>
                  <a href="orthopedics.php">Orthopedics</a>
                </h5>
                <p className="p-roboto">
                  Our experienced orthopaedic specialists will help you maintain the health of your bones and joints.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="hp-sp_sec_inner-index">
              <img src={pul} style={{width:200}} className="cardimg" />
              <div className="hp-sp_content_index_page">
                <h5>
                  <a href="pulmonology.php">Pulmonology</a>
                </h5>
                <p className="p-roboto">
                  Medway Hospitals provides comprehensive care for lung disease and offers a fusion of services to help you live a healthy life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
       <div>
      <section className="hp-sec8">
        <div className="container vertical-align-middle-hp-sec8">
          <div className="col-xs-12 col-sm-5">
            <h3>
              Why Medway? <span style={{ color: '#6ca836' }}></span>
            </h3>
            <p className="hp-sec8-para p-roboto">
              Medway Hospital is a leading healthcare facility offering treatment and care for patients from all walks of life. Started with two specialties, the past decade has witnessed the hospital expand to five units.
              Known for its comprehensive patient{' '}
              <a href="https://medwayhospitals.com/blog.php">care plan</a>, the team is available round the clock to ease the recovery process. With advanced ICU facilities, blood banks, and emergency care, the team ensures to take care of you and your family.
            </p>
          </div>
          <div className="col-xs-12 col-sm-7">
            <div className="row">
              <div className="col-xs-6">
                <div className="hp-sec8-icons-wrap">
                  <img src={icu} alt="Gauranteed" className="imgicu" />
                  <h4>Advanced ICU Facility</h4>
                </div>
              </div>
              <div className="col-xs-6">
                <div className="hp-sec8-icons-wrap">
                  <img src={blood} alt="Gauranteed" className="imgicu" />
                  <h4>Round-The-Clock Blood Bank</h4>
                </div>
              </div>
            </div><br/>
            <div className="row hp-sec8-row2">
              <div className="col-xs-6">
                <div className="hp-sec8-icons-wrap">
                  <img src={ambulance} alt="Gauranteed" className="imgicu" /><br/>
                  <h4>24*7 Ambulance Service</h4>
                </div>
              </div>
              <div className="col-xs-6">
                <div className="hp-sec8-icons-wrap">
                  <img src={glucose} alt="Gauranteed" className="imgicu" />
                  <h4>Ambulatory Glucose Profile (AGP) For Diabetes Care</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div><br/>
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
