import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },
    phone: {
      type: String,
      required: true,
      match: /^[0-9]{10}$/,
    },
    email: {
      type: String,
      match: /^\S+@\S+\.\S+$/,
    },
    medicalHistory: {
      bp: {
        type: Boolean,
        default: false,
      },
      sugar: {
        type: Boolean,
        default: false,
      },
      thyroid: {
        type: Boolean,
        default: false,
      },
      previousOperation: {
        isDone: {
          type: Boolean,
          default: false,
        },
        operationName: {
          type: String, 
        },
      },
      otherProblems: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  },
);

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;
