import mongoose from 'mongoose';

const infoSchema = new mongoose.Schema({
  section: String,     // ex: 'transport', 'accommodation'
  content: String,
});

const Info = mongoose.model('Info', infoSchema);
export default Info;
