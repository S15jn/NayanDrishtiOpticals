import EyeTest from "../models/EyeTest.js";
import Appointment from "../models/Appointment.js";

export const addEyeTest = async (req, res) => {
  try {
    const { appointment } = req.body;

    if (!appointment) {
      return res.status(400).json({
        message: "Appointment ID is required",
      });
    }

    const existingAppointment = await Appointment.findById(appointment);

    if (!existingAppointment) {
      return res.status(404).json({
        message: "Appointment not found",
      });
    }

    const alreadyExists = await EyeTest.findOne({ appointment });

    if (alreadyExists) {
      return res.status(400).json({
        message: "Eye test already exists for this appointment",
      });
    }

    const newTestData = {
      ...req.body,
      patient: existingAppointment.patient,
      doctor: existingAppointment.doctor,
    };

    const test = await EyeTest.create(newTestData);

    res.status(201).json({
      message: "Eye test added successfully",
      test,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding eye test",
      error: error.message,
    });
  }
};
export const getEyeTestsByPatient = async (req, res) => {
  try {
    const { patientId } = req.params;

    const tests = await EyeTest.find({
      patient: patientId,
    })
      .populate("patient")
      .populate("doctor")
      .populate("appointment");

    if (tests.length === 0) {
      return res.status(404).json({
        message: "No eye tests found for this patient",
      });
    }

    res.status(200).json(tests);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching eye tests",
      error: error.message,
    });
  }
};