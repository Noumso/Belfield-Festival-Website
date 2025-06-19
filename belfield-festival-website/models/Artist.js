import mongoose from 'mongoose';

const artistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: String,
  genre: String,
  photoUrl: String,
  socialLinks: {
    facebook: String,
    twitter: String,
    instagram: String,
    youtube: String,
    soundcloud: String,
  },
}, { timestamps: true });

export default mongoose.model('Artist', artistSchema);
