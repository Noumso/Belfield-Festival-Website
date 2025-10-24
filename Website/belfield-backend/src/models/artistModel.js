import mongoose from "mongoose";

const artistSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    style: String,
    bio: String,
    image: String,
    socials: {
      instagram: String,
      soundcloud: String,
      spotify: String,
      youtube: String,
    },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Artist", artistSchema);
