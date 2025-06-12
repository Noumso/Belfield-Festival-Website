import mongoose from 'mongoose';

const scheduleSchema = new mongoose.Schema({
  day: { type: String, required: true }, // ex: "Friday"
  date: { type: Date, required: true },
  startTime: String,  // "18:00"
  endTime: String,    // "19:30"
  artist: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist' },
  stage: String,
}, { timestamps: true });

export default mongoose.model('Schedule', scheduleSchema);
