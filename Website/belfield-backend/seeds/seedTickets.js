import mongoose from "mongoose";
import dotenv from "dotenv";
import Ticket from "../src/models/ticketModel.js";

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

const tickets = [
  {
    purchaserName: "Jean Dupont",
    purchaserEmail: "jean@example.com",
    quantity: 2,
    type: "Pass 3 jours",
    paymentStatus: "paid"
  },
  {
    purchaserName: "Marie Martin",
    purchaserEmail: "marie@example.com",
    quantity: 1,
    type: "Pass 1 jour",
    paymentStatus: "pending"
  }
];

const seed = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected");
    await Ticket.deleteMany();
    console.log("🧹 Ticket collection cleared");
    await Ticket.insertMany(tickets);
    console.log("🎉 Tickets seeded");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();
