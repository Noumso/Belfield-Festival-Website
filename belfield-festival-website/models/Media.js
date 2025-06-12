import mongoose from 'mongoose';

const mediaSchema = new mongoose.Schema({
  type: { type: String, enum: ['image', 'video'] },
  url: String,
  caption: String,
});

const Media = mongoose.model('Media', mediaSchema);
export default Media;
