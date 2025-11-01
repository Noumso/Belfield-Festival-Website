import mongoose from "mongoose";
import dotenv from "dotenv";
import Gallery from "../src/models/galleryModel.js";

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

const items = [
  {
    title: "Soirée du vendredi",
    caption: "Ambiance incroyable 🎉",
    url: "https://example.com/photo-friday.jpg",
  },
  {
    title: "Scène principale",
    caption: "Les Rockers en live",
    url: "https://example.com/photo-mainstage.jpg"
  }
];

const seed = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected");
    await Gallery.deleteMany();
    console.log("🧹 Gallery collection cleared");
    await Gallery.insertMany(items);
    console.log("🎉 Gallery seeded");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();
