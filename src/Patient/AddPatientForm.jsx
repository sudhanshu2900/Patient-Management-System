import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Footer from "../Components/Footer";

const schema = yup.object().shape({
  name: yup.string().required("Field is required"),
  age: yup
    .number()
    .positive()
    .typeError("Enter a number")
    .required("Age is required"),
  gender: yup.string().required("Field is required"),
  contact_no: yup
    .number()
    .typeError("Enter a number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .required("A phone number is required"),
  address: yup.string().required("Field is required"),
  disease: yup.string().required("Field is required"),
  specialist_assigned: yup.string().required("Field is required"),
  status: yup.string().required("Field is required"),
});

function AddPatientForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const submitInfo = async (data) => {
    await axios.post(`http://localhost:2000/patients/add`, data);
    reset();

    navigate("/patientlist");
  };

  return (
    <>
      <div className="container">
        <div className="patientForm">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>Add Patient</h2>
            <Link to="/patientlist">
              <button style={{ height: "50px", fontWeight: "800" }}>
                All Patients
              </button>
            </Link>
          </div>
          <form onSubmit={handleSubmit(submitInfo)}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputEmail4">Name</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("name")}
                />
                <span>{errors?.name?.message}</span>
              </div>

              <div className="form-group col-md-6">
                <label for="inputPassword4">Age</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("age")}
                />
                <span>{errors?.age?.message}</span>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputEmail4">Gender</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("gender")}
                />
                <span>{errors?.gender?.message}</span>
              </div>

              <div className="form-group col-md-6">
                <label for="inputPassword4">Contact No</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("contact_no")}
                />
                <span>{errors?.contact_no?.message}</span>
              </div>
            </div>

            <div className="form-group">
              <label for="inputAddress">Address</label>
              <input
                type="text"
                className="form-control"
                {...register("address")}
              />
              <span>{errors?.address?.message}</span>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputState">Disease</label>
                <select className="form-control" {...register("disease")}>
                  <option selected>Choose...</option>
                  <option>Pathology</option>
                  <option>Orthopedics</option>
                  <option>Neurology</option>
                  <option>Cardiology</option>
                  <option>Ophthalmology</option>
                </select>
                <span>{errors?.disease?.message}</span>
              </div>

              <div className="form-group col-md-6">
                <label for="inputState">Doctor Assign</label>
                <select
                  className="form-control"
                  {...register("specialist_assigned")}
                >
                  <option selected>Choose...</option>
                  <option>Dr. Shivam (Pathology)</option>
                  <option>Dr. Pallavi (Pathology)</option>
                  <option>Dr. Girraj (Orthopedics)</option>
                  <option>Dr. Reddy (Orthopedics)</option>
                  <option>Dr. Balvindar (Orthopedics)</option>
                  <option>Dr. Jhon (Neurology)</option>
                  <option>Dr. Ankita (Neurology)</option>
                  <option>Dr. Sumit (Cardiology)</option>
                  <option>Dr. Priyanka (Ophthalmology)</option>
                  <option>Dr. Tarun (Ophthalmology)</option>
                  <option>Dr. Prerna (Ophthalmology)</option>
                </select>
                <span>{errors?.specialist_assigned?.message}</span>
              </div>
            </div>

            <div className="form-group">
              <label for="inputStatus">Status</label>
              <input
                type="text"
                className="form-control"
                {...register("status")}
              />
              <span>{errors?.status?.message}</span>
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AddPatientForm;
