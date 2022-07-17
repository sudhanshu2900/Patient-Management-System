import React from "react";
import ServiceCard from "./Components/ServiceCard";
import { Link } from "react-router-dom";

function CardPage() {
  return (
    <>
      <div class="container">
        <div class="boxHome">
          <div class="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Link to="/addspecialist">
                <ServiceCard icon="👨‍⚕️" name="Add Specialist" />
              </Link>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Link to="/addpatient">
                <ServiceCard icon="👨‍🎤" name="Add Patient" />
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Link to="/check">
                <ServiceCard icon="😷" name="Check Patient Status" />
              </Link>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Link to="/medicine">
                <ServiceCard icon="🩺💊" name="Treatment & Medicine List" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardPage;
