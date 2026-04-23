import express from "express";
import {
  addEyeTest,
  getEyeTestsByPatient,
} from "../controllers/eyeTestController.js";

const router = express.Router();

router.post("/", addEyeTest);
router.get("/patient/:patientId", getEyeTestsByPatient);

export default router;