import React from "react";
import { Link } from "react-router-dom";
import "../Components/ComponentStyle.css";

function Footer() {
  return (
    <div class="boxFoot">
      <div class="icons" id="home">
        <Link
          to="/home"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Home Page"
        >
          🏠
        </Link>
      </div>

      <div class="icons" id="specialist">
        <Link
          to="/addspecialist"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Add Specialist"
        >
          👨‍⚕️
        </Link>
      </div>

      <div class="icons" id="patient">
        <Link
          to="/addpatient"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Add Patient"
        >
          👨‍🎤
        </Link>
      </div>

      <div class="icons" id="status">
        <Link
          to="/check"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Check Patient Status"
        >
          😷
        </Link>
      </div>

      <div class="icons" id="auth">
        <Link
          to="/medicine"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Medicine & Treatment List"
        >
          💉
        </Link>
      </div>
    </div>
  );
}

export default Footer;
