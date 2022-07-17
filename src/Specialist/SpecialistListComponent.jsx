import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

function SpecialistListComponent() {
  const [specialists, setSpecialists] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/specialists/all`).then((res) => {
      setSpecialists(res.data);
    });
  });

  function deleteSpecialist(e, id) {
    e.preventDefault();
    const clicked = e.target;
    clicked.innerText = "Deleting...";
    axios.delete(`http://localhost:4000/specialists/${id}`).then((res) => {
      clicked.closest("tr").remove();
    });
  }

  const history = useNavigate();

  const updateSpecialist = (id) => {
    history(`/updatespecialist/${id}`);
  };

  return (
    <div>
      <div className="myContainer">
        <div className="listdiv">
          <h2 className="text-center">Specialists List</h2>

          <div className="row">
            <table className="table table-striped">
              <thead className="thead-light">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Contact No</th>
                  <th>Qualification</th>
                  <th>Specialization</th>
                  <th>Address</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {specialists.map((specialist) => (
                  <tr key={specialist.id}>
                    <td>{specialist.id}</td>
                    <td>{specialist.name}</td>
                    <td>{specialist.age}</td>
                    <td>{specialist.gender}</td>
                    <td>{specialist.contact_no}</td>
                    <td>{specialist.qualification}</td>
                    <td>{specialist.specialization}</td>
                    <td>{specialist.address}</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-success"
                        onClick={() => updateSpecialist(specialist.id)}
                      >
                        Update
                      </button>
                      <br />
                      <br />
                      <button
                        type="button"
                        class="btn btn-danger"
                        onClick={(e) => deleteSpecialist(e, specialist.id)}
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
        <Footer />
      </div>
    </div>
  );
}

export default SpecialistListComponent;
