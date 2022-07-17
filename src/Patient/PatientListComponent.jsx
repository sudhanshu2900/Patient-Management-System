import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

function PatientListComponent() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:2000/patients/all`).then((res) => {
      setPatients(res.data);
    });
  }, []);

  function deletePatient(e, id) {
    e.preventDefault();
    const clicked = e.target;
    clicked.innerText = "Deleting...";
    axios.delete(`http://localhost:2000/patients/${id}`).then((res) => {
      clicked.closest("tr").remove();
    });
  }

  const history = useNavigate();

  const updatePatient = (id) => {
    history(`/updatepatient/${id}`);
  };

  return (
    <div>
      <div className="myContainer">
        <div className="listdiv">
          <h2 className="text-center">Patients List</h2>
          <div className="row">
            <table className="table table-striped">
              <thead className="thead-light">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Contact No</th>
                  <th>Address</th>
                  <th>Disease</th>
                  <th>Doctor Assigned</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {patients.map((patient) => (
                  <tr key={patient.id}>
                    <td>{patient.id}</td>
                    <td>{patient.name}</td>
                    <td>{patient.age}</td>
                    <td>{patient.gender}</td>
                    <td>{patient.contact_no}</td>
                    <td>{patient.address}</td>
                    <td>{patient.disease}</td>
                    <td>{patient.specialist_assigned}</td>
                    <td>{patient.status}</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-success"
                        onClick={() => updatePatient(patient.id)}
                      >
                        Update
                      </button>
                      <br />
                      <br />
                      <button
                        type="button"
                        class="btn btn-danger"
                        onClick={(e) => deletePatient(e, patient.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PatientListComponent;
