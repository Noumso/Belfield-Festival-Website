import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
    title: String,
    caption: String,
    url: { type: String, required: true },
    photographer: String,
    visible: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("Gallery", gallerySchema);
