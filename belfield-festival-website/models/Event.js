import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  stage: { type: String, required: true },
  artist: { type: String, required: true },
  description: String,
});

const Event = mongoose.model('Event', eventSchema);
export default Event;
