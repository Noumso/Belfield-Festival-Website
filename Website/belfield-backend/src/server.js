import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import artistRoutes from "./routes/artistRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import ticketRoutes from "./routes/ticketRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import volunteerRoutes from "./routes/volunteerRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();
connectDB();

const app = express();

// For Stripe webhooks we need the raw body; set up conditional middleware
import bodyParser from "body-parser";

// Use raw body for webhook route, JSON for others
app.use((req, res, next) => {
  if (req.originalUrl === "/api/tickets/webhook") {
    next();
  } else {
    express.json({ limit: "5mb" })(req, res, next);
  }
});

app.post("/api/tickets/webhook", bodyParser.raw({type: "*/*"})); // stripe webhook raw body
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000"
}));
if (process.env.NODE_ENV !== "production") app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => res.send("🎶 Belfield Festival API — ready"));

app.use("/api/artists", artistRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/volunteers", volunteerRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminRoutes);

// Error middleware (last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
