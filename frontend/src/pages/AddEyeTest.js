import { useEffect, useState } from "react";
import axios from "axios";

function AddEyeTest() {
  const [appointments, setAppointments] = useState([]);

  const [form, setForm] = useState({
    appointment: "",
    leftEyeVision: "",
    rightEyeVision: "",
    diagnosis: "",
    prescription: "",
  });

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    const res = await axios.get("http://localhost:5000/api/appointments");
    setAppointments(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/eye-tests", form);
      alert("Eye Test Added");
    } catch (err) {
      console.error(err);
      alert("Error adding test");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Eye Test</h2>

]      <select name="appointment" onChange={handleChange}>
        <option value="">Select Appointment</option>
        {appointments.map((a) => (
          <option key={a._id} value={a._id}>
            {a.patient?.name} - {a.doctor?.name}
          </option>
        ))}
      </select>

      <input
        name="leftEyeVision"
        placeholder="Left Eye Vision"
        onChange={handleChange}
      />
      <input
        name="rightEyeVision"
        placeholder="Right Eye Vision"
        onChange={handleChange}
      />

      <input
        name="diagnosis"
        placeholder="Diagnosis"
        onChange={handleChange}
      />

      <input
        name="prescription"
        placeholder="Prescription"
        onChange={handleChange}
      />

      <button type="submit">Add Test</button>
    </form>
  );
}

export default AddEyeTest;