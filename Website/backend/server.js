import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import artistRoutes from "./routes/artists.js";
import eventRoutes from "./routes/events.js";
import contactRoutes from "./routes/contact.js";
import benevoleRoutes from "./routes/benevole.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// --- Connexion MongoDB ---
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/belfield';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB Error:', err));
// --- Routes ---
app.use("/api/artists", artistRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/benevole", benevoleRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running at http://localhost:${PORT}`));// Default port 5000 is used for development purposes if no environment variable is set.
