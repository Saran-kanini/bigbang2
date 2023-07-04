import React, { Component } from "react";
import axios from "axios";
import { Variables } from "../Variables";
import "./Patient.css";

export default class Patient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: [],
      patient_Name: "",
      disease: "",
      disease_Description: "",
      patient_No: "",
      password: "",
      doctor_Id: "",
      selectedpatient_Id: null,
      showModal: false // New state for showing/hiding the modal
    };
  }

  componentDidMount() {
    this.fetchPatients();
  }

  fetchPatients() {
    axios
      .get(Variables.API_URL + "Patient")
      .then((response) => {
        const patients = response.data;
        this.setState({ patients });
      })
      .catch((error) => {
        console.error("Error fetching patients:", error);
      });
  }

  // Other methods...

  toggleModal = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
      patient_Name: "",
      disease: "",
      disease_Description: "",
      patient_No: "",
      password: "",
      doctor_Id: ""
    }));
  };

  render() {
    const {
      patients,
      patient_Name,
      disease,
      disease_Description,
      patient_No,
      password,
      doctor_Id,
      selectedpatient_Id,
      showModal
    } = this.state;
  
    return (
      <div className="patient-container">
        <h2>Patients</h2>
        <button onClick={this.toggleModal}>Create Patient</button>
        
        <div className="patient-list">
          {patients.map((patient) => (
            <div className={`patient-card ${selectedpatient_Id === patient.id ? "selected" : ""}`} key={patient.id}>
              <h3>{patient.patient_Name}</h3>
              <p>Disease: {patient.disease}</p>
              <p>Patient Number: {patient.patient_No}</p>
              <p>Doctor ID: {patient.doctor_Id}</p>
              <div className="card-buttons">
                <button onClick={() => this.handleUpdate(patient.id)}>Edit</button>
                <button onClick={() => this.deletePatient(patient.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
}
