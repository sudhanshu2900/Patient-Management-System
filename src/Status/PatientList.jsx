import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

function PatientDetailsList() {
  const [patient, setPatients] = useState([]);

  const location = useLocation();
  const patientId = location.pathname.split("/").pop();

  const fun = async () => {
    const result = await axios.get(
      `https://pms-patient-microservice.herokuapp.com/patients/${patientId}`
    );
    setPatients(result?.data);
  };

  useEffect(() => {
    fun();
  }, []);

  const history = useNavigate();

  const updatePatient = (id) => {
    history(`/updatepatient/${id}`);
  };

  return (
    <div>
      <div className="myContainer">
        <div className="listdiv">
          <h2 className="text-center">Patient Details</h2>
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
                {patient ? (
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
                    </td>
                  </tr>
                ) : (
                  <div>Data not found</div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PatientDetailsList;
