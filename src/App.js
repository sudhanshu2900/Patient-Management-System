import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import CardPage from "./CardPage";
import AddPatientForm from "./Patient/AddPatientForm";
import AddSpecialistForm from "./Specialist/AddSpecialistForm";
import MedicineTreatment from "./Components/MedicineTreatment";
import LoginForm from "./Authentication/LoginForm";
import PatientListComponent from "./Patient/PatientListComponent";
import SpecialistListComponent from "./Specialist/SpecialistListComponent";
import CheckStatusForm from "./Status/CheckStatusForm";
import UpdatePatientForm from "./Patient/UpdatePatientForm";
import UpdateSpecialistForm from "./Specialist/UpdateSpecialistForm";
import PatientDetailsList from "./Status/PatientList";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/home" element={<CardPage />} />

        <Route path="/login" element={<LoginForm />} />
        <Route path="/check" element={<CheckStatusForm />} />
        <Route path="/addpatient" element={<AddPatientForm />} />
        <Route path="/addspecialist" element={<AddSpecialistForm />} />
        <Route path="/updatepatient/:id" element={<UpdatePatientForm />} />
        <Route
          path="/updatespecialist/:id"
          element={<UpdateSpecialistForm />}
        />

        <Route path="/medicine" element={<MedicineTreatment />} />
        <Route path="/patientlist" element={<PatientListComponent />} />
        <Route path="/patientdetail/:id" element={<PatientDetailsList />} />
        <Route path="/specialistlist" element={<SpecialistListComponent />} />
      </Routes>
    </>
  );
}

export default App;
