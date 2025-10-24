import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: String,
    email: { type: String, required: true },
    phone: String,
    availability: String,
    rolePreference: String,
    notes: String,
    approved: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Volunteer", volunteerSchema);
