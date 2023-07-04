import React, { Component } from "react";
import axios from "axios";
import { Variables } from "../Variables";
import "./Appointment.css";
import Navpatient from "../Navbar/Navpatient";

export class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
      appointment_Date: "",
      description: "",
      patientName: "",
      patientPhoneNumber: "",
      patientEmail: "",
      patient_Id: 0,
      doctor_Id: 0,
      selectedAppointmentId: null,
    };
  }

  componentDidMount() {
    this.fetchAppointments();
  }

  fetchAppointments() {
    axios
      .get(`${Variables.API_URL}Appointments`)
      .then((response) => {
        this.setState({ appointments: response.data });
      })
      .catch((error) => {
        console.error("Error Fetching Appointments:", error);
      });
  }

  handleDateInputChange(event) {
    const { value } = event.target;
    this.setState({ appointment_Date: value });
  }

  handleDescriptionInputChange(event) {
    this.setState({ description: event.target.value });
  }

  handleNameInputChange(event) {
    this.setState({ patientName: event.target.value });
  }

  handlePhoneNumberInputChange(event) {
    this.setState({ patientPhoneNumber: event.target.value });
  }

  handleEmailInputChange(event) {
    this.setState({ patientEmail: event.target.value });
  }

  handleIdInputChange(event) {
    this.setState({ patient_Id: event.target.value });
  }

  handledoctor_IdInputChange(event) {
    this.setState({ doctor_Id: event.target.value });
  }

  createAppointment() {
    const {
      appointment_Date,
      description,
      patientName,
      patientPhoneNumber,
      patientEmail,
      patient_Id,
      doctor_Id,
    } = this.state;

    const appointment_DateValue = new Date(appointment_Date).toISOString();

    const newAppointment = {
      appointment_Date: appointment_DateValue,
      description,
      patientName,
      patientPhoneNumber,
      patientEmail,
      patient_Id: patient_Id ? parseInt(patient_Id) : 0,
      doctor_Id: doctor_Id ? parseInt(doctor_Id) : 0,
    };

    axios
      .post(`${Variables.API_URL}Appointments`, newAppointment, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data;
        if (data.errors) {
          console.log("Validation Errors:", data.errors);
        } else {
          console.log("Appointment Created:", data);
          this.fetchAppointments();
          this.setState({
            appointment_Date: "",
            description: "",
            patientName: "",
            patientPhoneNumber: "",
            patientEmail: "",
            patient_Id: "",
            doctor_Id: "",
          });
        }
      })
      .catch((error) => {
        console.error("Error Creating the Appointment:", error);
      });
  }

  handleUpdate(appointmentId) {
    axios
      .get(`${Variables.API_URL}Appointment/${appointmentId}`)
      .then((response) => {
        const {
          appointment_Date,
          description,
          patientName,
          patientPhoneNumber,
          patientEmail,
          patient_Id,
          doctor_Id,
        } = response.data;
        this.setState({
          appointment_Date,
          description,
          patientName,
          patientPhoneNumber,
          patientEmail,
          patient_Id: patient_Id ? patient_Id.toString() : "",
          doctor_Id: doctor_Id ? doctor_Id.toString() : "",
          selectedAppointmentId: appointmentId,
        });
      })
      .catch((error) => {
        console.error("Error Fetching Appointment Details:", error);
      });
  }

  updateAppointment() {
    const {
      appointment_Date,
      description,
      patientName,
      patientPhoneNumber,
      patientEmail,
      patient_Id,
      doctor_Id,
      selectedAppointmentId,
    } = this.state;

    const appointment_DateValue = new Date(appointment_Date).toISOString();

    const updatedAppointment = {
      appointmentId: selectedAppointmentId,
      appointment_Date: appointment_DateValue,
      description,
      patientName,
      patientPhoneNumber,
      patientEmail,
      patient_Id: patient_Id ? parseInt(patient_Id) : 0,
      doctor_Id: doctor_Id ? parseInt(doctor_Id) : 0,
    };

    axios
      .put(
        `${Variables.API_URL}Appointment/${selectedAppointmentId}`,
        updatedAppointment,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const data = response.data;
        if (data.errors) {
          console.log("Validation Errors:", data.errors);
        } else {
          console.log("Appointment Updated:", data);
          this.fetchAppointments();
          this.setState({
            appointment_Date: "",
            description: "",
            patientName: "",
            patientPhoneNumber: "",
            patientEmail: "",
            patient_Id: "",
            doctor_Id: "",
            selectedAppointmentId: null,
          });
        }
      })
      .catch((error) => {
        console.error("Error Updating the Appointment:", error);
      });
  }

  handleDelete(appointmentId) {
    axios
      .delete(`${Variables.API_URL}Appointment/${appointmentId}`)
      .then((response) => {
        console.log("Appointment Deleted:", response.data);
        this.fetchAppointments();
      })
      .catch((error) => {
        console.error("Error Deleting the Appointment:", error);
      });
  }


        render() {
            const {
              appointments,
              appointment_Date,
              description,
              patientName,
              patientPhoneNumber,
              patientEmail,
              patient_Id,
              doctor_Id,
              selectedAppointmentId,
            } = this.state;
          
            return (
                <div><Navpatient/>
              <div className="appointment-container">
                <h2>Appointments</h2>
              {/* Input fields inside a card */}
              <div className="appointment-card">
                    <div className="card-body">
                      <h4 className="card-title">New Appointment</h4>
                      <div className="form-group">
                        <label>Date:</label>
                        <input
                          className="form-control"
                          type="datetime-local"
                          value={appointment_Date}
                          onChange={(e) => this.handleDateInputChange(e)}
                        />
                      </div>
                      <div className="form-group">
                        <label>Description:</label>
                        <input
                          className="form-control"
                          type="text"
                          value={description}
                          onChange={(e) => this.handleDescriptionInputChange(e)}
                        />
                      </div>
                      <div className="form-group">
                        <label>Patient Name:</label>
                        <input
                          className="form-control"
                          type="text"
                          value={patientName}
                          onChange={(e) => this.handleNameInputChange(e)}
                        />
                      </div>
                      <div className="form-group">
                        <label>Patient Phone Number:</label>
                        <input
                          className="form-control"
                          type="text"
                          value={patientPhoneNumber}
                          onChange={(e) => this.handlePhoneNumberInputChange(e)}
                        />
                      </div>
                      <div className="form-group">
                        <label>Patient Email:</label>
                        <input
                          className="form-control"
                          type="text"
                          value={patientEmail}
                          onChange={(e) => this.handleEmailInputChange(e)}
                        />
                      </div>
                      <div className="form-group">
                        <label>Patient ID:</label>
                        <input
                          className="form-control"
                          type="text"
                          value={patient_Id}
                          onChange={(e) => this.handleIdInputChange(e)}
                        />
                      </div>
                      <div className="form-group">
                        <label>Doctor ID:</label>
                        <input
                          className="form-control"
                          type="text"
                          value={doctor_Id}
                          onChange={(e) => this.handledoctor_IdInputChange(e)}
                        />
                      </div>
                      <div className="form-group">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => this.createAppointment()}
                        >
                          Book Appointment
                        </button>
                      </div>
                    </div>
                  </div>
                <h3>Appointment List</h3>
                <div className="appointment-list">
                  {appointments.map((appointment) => (
                    <div className="appointment-card" key={appointment.appointmentId}>
                      <div className="card-body">
                        {/* Appointment details */}
                        <h4 className="card-title">{appointment.patientName}</h4>
                        <p className="card-text">Date: {appointment.appointment_Date}</p>
                        <p className="card-text">Description: {appointment.description}</p>
                        <p className="card-text">Phone Number: {appointment.patientPhoneNumber}</p>
                        <p className="card-text">Email: {appointment.patientEmail}</p>
                        <p className="card-text">Patient ID: {appointment.patient_Id}</p>
                        <p className="card-text">Doctor ID: {appointment.doctor_Id}</p>  
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              </div>
            );
          }
}

export default Appointment;