import mongoose from "mongoose";
import dotenv from "dotenv";
import Volunteer from "../src/models/volunteerModel.js";

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

const volunteers = [
  {
    firstName: "Lucas",
    lastName: "Martin",
    email: "lucas@example.com",
    availability: "weekend",
    rolePreference: "Accueil"
  },
  {
    firstName: "Sophie",
    lastName: "Dubois",
    email: "sophie@example.com",
    availability: "vendredi",
    rolePreference: "Billetterie"
  }
];

const seed = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected");
    await Volunteer.deleteMany();
    console.log("🧹 Volunteer collection cleared");
    await Volunteer.insertMany(volunteers);
    console.log("🎉 Volunteers seeded");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();
