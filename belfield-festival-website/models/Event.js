import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  stage: String,
  date: String,
  time: String,
});

const Event = mongoose.model('Event', eventSchema);
export default Event;
