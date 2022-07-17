import React from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import Footer from "../Components/Footer";

function CheckStatusForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const route = useLocation();
  const id = route.pathname.split("/").pop();

  const navigate = useNavigate();

  const submitInfo = async (data) => {
    navigate(`/patientdetail/${data?.id}`);
  };

  return (
    <>
      <div className="container p-5" style={{ height: "100vh" }}>
        <div className="loginForm mx-auto">
          <h2>Check Patient's Status</h2>
          <form onSubmit={handleSubmit(submitInfo)}>
            <div class="form-group">
              <label for="exampleInputEmail1">Unique ID</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Id"
                {...register("id")}
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Check
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default CheckStatusForm;
