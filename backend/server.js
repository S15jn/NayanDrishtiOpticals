import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import patientRoutes from "./routes/patientRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import eyeTestRoutes from "./routes/eyeTestRoutes.js";
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Debug

// DB Connection
connectDB();

// Routes
app.use("/api/patients", patientRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/eye-tests", eyeTestRoutes);
// Test Route
app.get("/", (req, res) => {
  res.send("Jain Eye Care API is running...");
});

// Start Server
const PORT = process.env.PORT || 8089;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
