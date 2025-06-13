import mongoose from 'mongoose';

const infoSchema = new mongoose.Schema({
  title: String,
  content: String,
  category: String, // ex: "general", "faq", "rules"
}, { timestamps: true });

export default mongoose.model('Info', infoSchema);
