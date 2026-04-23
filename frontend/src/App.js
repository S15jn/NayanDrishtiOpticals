import AddPatient from "./pages/AddPatient";
import PatientList from "./pages/PatientList";
import AddDoctor from "./pages/AddDoctor";
import AddAppointment from "./pages/AddAppointment";
import AppointmentList from "./pages/AppointmentList";
import AddEyeTest from "./pages/AddEyeTest";

function App() {
  return (
    <div>
      <h1>Jain Eye Clinic</h1>

      <AddPatient />
      <PatientList />
      <AddDoctor />
      <AddAppointment />
      <AppointmentList />
      <AddEyeTest />
    </div>
  );
}

export default App;
