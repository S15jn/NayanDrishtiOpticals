import { useEffect, useState } from "react";
import axios from "axios";

function PatientList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/patients");
      setPatients(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>All Patients</h2>

      {patients.map((p) => (
        <div
          key={p._id}
          style={{ border: "1px solid black", margin: "10px", padding: "10px" }}
        >
          <p>
            <b>Name:</b> {p.name}
          </p>
          <p>
            <b>Age:</b> {p.age}
          </p>
          <p>
            <b>Phone:</b> {p.phone}
          </p>
        </div>
      ))}
    </div>
  );
}

export default PatientList;
