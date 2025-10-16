import mongoose from "mongoose";
import dotenv from "dotenv";
import Artist from "./src/models/Artist.js"; // chemin vers ton modèle

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const artists = [
  {
    name: "D'RAM",
    style: "Electro",
    bio: "Le son phare du festival Belfield.",
    image: "https://www.instagram.com/woodland_festival/p/Cw0Lcr9ozWN/",
    socials: {
      instagram: "https://www.instagram.com/julesderramond/",
      soundcloud: "https://soundcloud.com/user-811849889",
      youtube: "https://www.youtube.com/@djdram"
    },
    order: 1
    },
];

const seedArtists = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connecté");

    // Supprime les artistes existants si tu veux repartir à zéro
    await Artist.deleteMany();
    console.log("⚡ Collection Artist vide");

    // Insère les artistes
    await Artist.insertMany(artists);
    console.log("🎉 Artistes ajoutés avec succès !");

    process.exit();
  } catch (error) {
    console.error("❌ Erreur :", error);
    process.exit(1);
  }
};

seedArtists();
