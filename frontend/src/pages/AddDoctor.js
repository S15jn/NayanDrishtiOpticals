import { useState } from "react";
import axios from "axios";

function AddDoctor() {
  const [form, setForm] = useState({
    name: "",
    specialization: "",
    experience: "",
    fees: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/doctors", form);
      alert("Doctor added");
    } catch (err) {
      console.error(err);
      alert("Error adding doctor");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Doctor</h2>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <input
        name="specialization"
        placeholder="Specialization"
        onChange={handleChange}
      />
      <input
        name="experience"
        placeholder="Experience"
        onChange={handleChange}
      />
      <input name="fees" placeholder="Fees" onChange={handleChange} />

      <button type="submit">Add Doctor</button>
    </form>
  );
}

export default AddDoctor;
