// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// export default function PatientRegister() {
//   const [patient_Name, setPatientName] = useState('');
//   const [password, setPassword] = useState('');
//   const [disease, setDisease] = useState('');
//   const [disease_Description, setDiseaseDescription] = useState('');
//   const [patient_No, setPatientNo] = useState('');
//   const navigate = useNavigate();

//   const validateForm = () => {
//     let isValid = true;
//     let errorMessage = 'Please enter the value in ';
    
//     if (patient_Name === null || patient_Name === '') {
//       isValid = false;
//       errorMessage += 'Patient Name';
//     }
//     if (password === null || password === '') {
//       isValid = false;
//       errorMessage += ' Password';
//     }
//     if (disease === null || disease === '') {
//       isValid = false;
//       errorMessage += ' Disease';
//     }
//     if (disease_Description === null || disease_Description === '') {
//       isValid = false;
//       errorMessage += ' Disease Description';
//     }
//     if (patient_No === null || patient_No === '') {
//       isValid = false;
//       errorMessage += ' Patient Number';
//     }

//     if (!isValid) {
//       toast.warning(errorMessage);
//     }

//     return isValid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       const registrationData = {
//         patient_Name,
//         disease,
//         disease_Description,
//         patient_No,
//         password,
//       };

//       fetch('https://localhost:7010/api/Patient', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(registrationData),
//       })
//         .then((res) => {
//           toast.success('Registered Successfully');
//           navigate('/homepatient');
//         })
//         .catch((err) => {
//           toast.error('Failed: ' + err.message);
//         });
//     }
//   };

//   return (
//     <div>
//       <div className="offset-lg-3 col-lg-6">
//         <form className="container" onSubmit={handleSubmit}>
//           <div className="card">
//             <div className="card-header">
//               <h1>User Registration</h1>
//             </div>
//             <div className="card-body">
//               <div className="form-group">
//                 <label>
//                   Patient Name <span className="errmsg">*</span>
//                 </label>
//                 <input
//                   value={patient_Name}
//                   onChange={(e) => setPatientName(e.target.value)}
//                   className="form-control"
//                 />
//               </div>
//               <div className="form-group">
//                 <label>
//                   Disease <span className="errmsg">*</span>
//                 </label>
//                 <input
//                   value={disease}
//                   onChange={(e) => setDisease(e.target.value)}
//                   className="form-control"
//                 />
//               </div>
//               <div className="form-group">
//                 <label>
//                   Disease Description <span className="errmsg">*</span>
//                 </label>
//                 <input
//                   value={disease_Description}
//                   onChange={(e) => setDiseaseDescription(e.target.value)}
//                   className="form-control"
//                 />
//               </div>
//               <div className="form-group">
//                 <label>
//                   Patient Number <span className="errmsg">*</span>
//                 </label>
//                 <input
//                   value={patient_No}
//                   onChange={(e) => setPatientNo(e.target.value)}
//                   className="form-control"
//                 />
//               </div>
//               <div className="form-group">
//                 <label>
//                   Password <span className="errmsg">*</span>
//                 </label>
//                 <input
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   type="password"
//                   className="form-control"
//                 />
//               </div>
//             </div>
//             <div className="card-footer">
//               <button type="submit" className="btn btn-primary">
//                 Register
//               </button>{' '}
//               &nbsp;
//               <Link to={'/loginpatient'} className="btn btn-danger">
//                 Close
//               </Link>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }