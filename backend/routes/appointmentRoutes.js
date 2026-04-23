import express from "express";
import {
  createAppointment,
  getAppointments,
  getAppointmentsByPatient,
  getAppointmentsByDate,
  updateAppointmentStatus,
  deleteAppointment,
} from "../controllers/appointmentController.js";

const router = express.Router();

router.post("/", createAppointment);
router.get("/", getAppointments);
router.get("/patient/:patientId", getAppointmentsByPatient);
router.put("/:id/status", updateAppointmentStatus);
router.get("/date/filter", getAppointmentsByDate);
router.delete("/:id", deleteAppointment);
export default router;
