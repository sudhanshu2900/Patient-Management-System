import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const loginValidationSchema = yup.object().shape({
  userName: yup.string().trim().required("Username is required"),
  password: yup.string().required("Password is required"),
});

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
  });

  const navigate = useNavigate();

  const login = async (data) => {
    try {
      const res = await axios.post(
        `http://localhost:1000/api/v1/auth/login`,
        data
      );

      if (res?.data) {
        const user = await axios.get(
          `http://localhost:1000/api/v1/auth/userinfo`,
          {
            headers: { Authorization: `Bearer ${res?.data?.token}` },
          }
        );

        if (user) {
          navigate("/home");
        }
      }
    } catch (error) {
      toast.error("You are not authenticated ❌");
    }
  };

  return (
    <>
      <ToastContainer />
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="loginForm">
          <h2>Login</h2>
          <form onSubmit={handleSubmit(login)}>
            <div class="form-group">
              <label for="username">Username</label>
              <input
                type="text"
                class="form-control"
                {...register("userName")}
                aria-describedby="emailHelp"
                placeholder="Enter username"
              />
              <span>{errors?.userName?.message}</span>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                {...register("password")}
                placeholder="Enter password"
              />
              <span>{errors?.password?.message}</span>
            </div>

            <button type="submit" class="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
