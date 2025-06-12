import mongoose from 'mongoose';

const mediaSchema = new mongoose.Schema({
  title: String,
  type: { type: String, enum: ['image', 'video', 'audio'], required: true },
  url: { type: String, required: true },
  description: String,
  artist: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist' },
}, { timestamps: true });

export default mongoose.model('Media', mediaSchema);
