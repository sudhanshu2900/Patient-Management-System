import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className="container">
      <div className="boxMain">
        <h1>Welcome</h1>
        <h2>Patient Management System</h2>
        <Link to="/login">
          <button type="button">LOGIN</button>
        </Link>
      </div>
    </div>
  );
}

export default MainPage;
