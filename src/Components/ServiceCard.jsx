import React from "react";
import "../Components/ComponentStyle.css";

function ServiceCard({ icon, name }) {
  return (
    <>
      <div class="card">
        <p>{icon}</p>
        <h4>{name}</h4>
      </div>
    </>
  );
}

export default ServiceCard;
