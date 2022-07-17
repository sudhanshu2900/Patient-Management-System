import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Components/Footer";

function UpdateSpecialistForm() {
  const { register, handleSubmit, setValue } = useForm();

  const route = useLocation();
  const id = route.pathname.split("/").pop();

  const navigate = useNavigate();

  const updateInfo = async (data) => {
    await axios.put(`http://localhost:4000/specialists/update`, {
      id: id,
      ...data,
    });
    navigate("/specialistlist");
  };

  const loadSpecialist = async () => {
    const result = await axios.get(`http://localhost:4000/specialists/${id}`);
    setValue("name", result?.data?.name);
    setValue("age", result?.data?.age);
    setValue("gender", result?.data?.gender);
    setValue("contact_no", result?.data?.contact_no);
    setValue("address", result?.data?.address);
    setValue("qualification", result?.data?.qualification);
    setValue("specialization", result?.data?.specialization);

    console.log(result.data);
  };
  useEffect(() => {
    loadSpecialist();
  }, []);

  return (
    <>
      <div className="container">
        <div className="specialistForm">
          <h2>Update Specialist</h2>

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
                <label for="inputEmail4">Qualification</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("qualification")}
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4">Specialization</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("specialization")}
                />
              </div>
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

export default UpdateSpecialistForm;
