import { useEffect, useState } from "react";
import axios from "axios";

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/appointments");
      setAppointments(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Appointments</h2>

      {appointments.map((a) => (
        <div key={a._id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <p><b>Patient:</b> {a.patient?.name}</p>
          <p><b>Doctor:</b> {a.doctor?.name}</p>
          <p><b>Date:</b> {new Date(a.date).toLocaleDateString()}</p>
          <p><b>Time:</b> {a.time}</p>
          <p><b>Status:</b> {a.status}</p>
        </div>
      ))}
    </div>
  );
}

export default AppointmentList;