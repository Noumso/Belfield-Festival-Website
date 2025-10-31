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

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000"
}));

// Logging (development environment only)
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// JSON body (for all routes, 5MB limit)
app.use((req, res, next) => {
  if (req.originalUrl === "/api/tickets/webhook") {
    // Use raw body for Stripe webhook
    express.raw({ type: "*/*" })(req, res, next);
  } else {
    express.json({ limit: "5mb" })(req, res, next);
  }
});

// Root route
app.get("/", (req, res) => res.send("🎶 Belfield Festival API — ready"));

// API routes
app.use("/api/artists", artistRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/volunteers", volunteerRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminRoutes);

// Error handler (last middleware)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
