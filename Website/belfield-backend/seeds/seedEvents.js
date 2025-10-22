import mongoose from "mongoose";
import dotenv from "dotenv";
import Event from "../src/models/eventModel.js";

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

const events = [
  {
    title: "Soirée d'ouverture",
    description: "Concert d'ouverture avec DJ Belfield",
    date: "2025-08-15T20:00:00Z",
    location: "Parc de la Lère - Caussade",
    stage: "Main Stage",
    featured: true
  },
  {
    title: "Main Stage - The Rockers",
    description: "Groupe The Rockers sur la scène principale",
    date: "2025-08-16T18:00:00Z",
    location: "Parc de la Lère",
    stage: "Main Stage"
  }
];

const seed = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected");
    await Event.deleteMany();
    console.log("🧹 Event collection cleared");
    await Event.insertMany(events);
    console.log("🎉 Events seeded");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();
