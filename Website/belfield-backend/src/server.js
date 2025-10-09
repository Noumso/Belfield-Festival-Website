import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import artistRoutes from "./routes/artistRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import volunteerRoutes from "./routes/volunteerRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import ticketRoutes from "./routes/ticketRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => res.send("🎶 Belfield Festival API — en ligne"));

app.use("/api/artists", artistRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/volunteers", volunteerRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/tickets", ticketRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Serveur lancé sur le port ${PORT}`));
