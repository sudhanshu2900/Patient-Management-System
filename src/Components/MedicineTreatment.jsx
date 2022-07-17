import React from "react";
import Footer from "./Footer";

function MedicineTreatment() {
  const leftBtnToggle = () => {
    if (document.getElementById("displayMedicineList").style.display !== "none")
      document.getElementById("displayMedicineList").style.display = "none";
    else {
      document.getElementById("displayMedicineList").style.display = "block";
      document.getElementById("leftBtn").style.backgroundColor = "aquamarine";
      document.getElementById("rightBtn").style.backgroundColor = "#fff";
      document.getElementById("displayTreatmentList").style.display = "none";
    }
  };

  const rightBtnToggle = () => {
    if (
      document.getElementById("displayTreatmentList").style.display !== "none"
    )
      document.getElementById("displayTreatmentList").style.display = "none";
    else {
      document.getElementById("displayTreatmentList").style.display = "block";
      document.getElementById("rightBtn").style.backgroundColor = "aquamarine";
      document.getElementById("leftBtn").style.backgroundColor = "#fff";
      document.getElementById("displayMedicineList").style.display = "none";
    }
  };

  return (
    <>
      <div className="container">
        <div className="medicineTreatment">
          <h2>Medicine & Treatment Lists</h2>
          <div className="row" id="twoBtn">
            <div
              id="leftBtn"
              className="col-lg-6 col-md-6 col-sm-12"
              onClick={leftBtnToggle}
            >
              Medicine List
            </div>
            <div
              id="rightBtn"
              className="col-lg-6 col-md-6 col-sm-12"
              onClick={rightBtnToggle}
            >
              Treatment List
            </div>
          </div>
          <div className="row">
            <div id="displayMedicineList">
              <h5>Medicines Available</h5>

              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Medicine Name</th>
                    <th scope="col">Medicine Price</th>
                    <th scope="col">Date of expire</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Oraflora</td>
                    <td>Rs. 60</td>
                    <td>05/2023</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Maxrell</td>
                    <td>Rs. 155</td>
                    <td>03/2024</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>O2</td>
                    <td>Rs. 45</td>
                    <td>08/2022</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Hunk</td>
                    <td>Rs. 250</td>
                    <td>04/2024</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Domperadom</td>
                    <td>Rs. 100</td>
                    <td>07/2023</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Sporlac</td>
                    <td>Rs. 95</td>
                    <td>09/2025</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div id="displayTreatmentList">
              <h5>Treatments Available</h5>
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Treatment Name</th>
                    <th scope="col">Specialists Available</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Pathology</td>
                    <td>
                      Dr. Shivam
                      <br />
                      Dr. Pallavi
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Orthopedics</td>
                    <td>
                      Dr. Girraj
                      <br />
                      Dr. Reddy
                      <br />
                      Dr. Balvindar
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Neurology</td>
                    <td>
                      Dr. Jhon
                      <br />
                      Dr. Ankita
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Cardiology</td>
                    <td>Dr. Sumit</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Ophthalmology</td>
                    <td>
                      Dr. Priyanka
                      <br />
                      Dr. Prerna
                      <br />
                      Dr. Tarun
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default MedicineTreatment;
