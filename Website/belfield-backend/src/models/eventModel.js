import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    date: { type: Date, required: true },
    startTime: String,
    endTime: String,
    location: String,
    stage: String,
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);
