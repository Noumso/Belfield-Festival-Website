import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: String,
    message: { type: String, required: true },
    handled: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);
