import mongoose from "mongoose";

const benevoleSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  availability: String,
  date: { type: Date, default: Date.now }
});

export default mongoose.model("Benevole", benevoleSchema);
