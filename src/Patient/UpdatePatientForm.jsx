import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Components/Footer";

function UpdatePatientForm() {
  const { register, handleSubmit, setValue } = useForm();

  const route = useLocation();
  const id = route.pathname.split("/").pop();

  const navigate = useNavigate();

  const updateInfo = async (data) => {
    await axios.put(
      `https://pms-patient-microservice.herokuapp.com/patients/update`,
      {
        id: id,
        ...data,
      }
    );
    navigate("/patientlist");
  };

  const loadPatient = async () => {
    const result = await axios.get(
      `https://pms-patient-microservice.herokuapp.com/patients/${id}`
    );
    setValue("name", result?.data?.name);
    setValue("age", result?.data?.age);
    setValue("gender", result?.data?.gender);
    setValue("contact_no", result?.data?.contact_no);
    setValue("address", result?.data?.address);
    setValue("disease", result?.data?.disease);
    setValue("specialist_assigned", result?.data?.specialist_assigned);
    setValue("status", result?.data?.status);
  };
  useEffect(() => {
    loadPatient();
  }, []);

  return (
    <>
      <div className="container">
        <div className="patientForm">
          <h2>Update Patient</h2>

          <form onSubmit={handleSubmit(updateInfo)}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputEmail4">Name</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("name")}
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4">Age</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("age")}
                />
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
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4">Contact No</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("contact_no")}
                />
              </div>
            </div>
            <div className="form-group">
              <label for="inputAddress">Address</label>
              <input
                type="text"
                className="form-control"
                {...register("address")}
              />
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
              </div>
            </div>
            <div className="form-group">
              <label for="inputStatus">Status</label>
              <input
                type="text"
                className="form-control"
                {...register("status")}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default UpdatePatientForm;
