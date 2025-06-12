import mongoose from 'mongoose';

const artistSchema = new mongoose.Schema({
  name: String,
  bio: String,
  stage: String,
  time: String,
  image: String, // URL
});

const Artist = mongoose.model('Artist', artistSchema);
export default Artist;
