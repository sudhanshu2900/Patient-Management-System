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
  qualification: yup.string().required("Field is required"),
  specialization: yup.string().required("Field is required"),
  address: yup.string().required("Field is required"),
});

function AddSpecialistForm() {
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
    await axios.post(
      `https://pms-specialist-microservice.herokuapp.com/specialists/add`,
      data
    );
    reset();

    navigate("/specialistlist");
  };

  return (
    <>
      <div className="container">
        <div className="specialistForm">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>Add Specialist</h2>
            <Link to="/specialistlist">
              <button style={{ height: "50px", fontWeight: "800" }}>
                All Specialists
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
                <label for="inputEmail4">Qualification</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("qualification")}
                />
                <span>{errors?.qualification?.message}</span>
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4">Specialization</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("specialization")}
                />
                <span>{errors?.specialization?.message}</span>
              </div>
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

export default AddSpecialistForm;
