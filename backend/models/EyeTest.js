import mongoose from "mongoose";

const eyeTestSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    appointment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointment",
    },

    leftEyeVision: {
      type: String,
    },
    rightEyeVision: {
      type: String,
    },

    leftEyePower: {
      type: String,
    },
    rightEyePower: {
      type: String,
    },

    eyePressure: {
      type: Number,
    },
    colorBlindness: {
      type: Boolean,
      default: false,
    },

    diagnosis: {
      type: String,
    },

    prescription: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const EyeTest = mongoose.model("EyeTest", eyeTestSchema);

export default EyeTest;
