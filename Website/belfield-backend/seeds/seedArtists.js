import mongoose from "mongoose";
import dotenv from "dotenv";
import Artist from "../src/models/artistModel.js";

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

const artists = [
  {
    name: "DJ Belfield",
    style: "Electro",
    bio: "Le son phare du festival Belfield.",
    image: "https://example.com/dj-belfield.jpg",
    socials: { instagram: "https://instagram.com/dj-belfield" },
    order: 1
  },
  {
    name: "The Rockers",
    style: "Rock",
    bio: "Groupe phare du festival.",
    image: "https://example.com/the-rockers.jpg",
    socials: { instagram: "https://instagram.com/the-rockers" },
    order: 2
  },
  {
    name: "Electra Beats",
    style: "House",
    bio: "DJ set électrisant.",
    image: "https://example.com/electra-beats.jpg",
    socials: { instagram: "https://instagram.com/electra-beats" },
    order: 3
  }
];

const seed = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected");
    await Artist.deleteMany();
    console.log("🧹 Artist collection cleared");
    await Artist.insertMany(artists);
    console.log("🎉 Artists seeded");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();
