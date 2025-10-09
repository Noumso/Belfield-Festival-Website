import express from "express";
import {
  getEvents,
  createEvent,
} from "../controllers/eventController.js";

const router = express.Router();

// Liste ou création d'événements
router.route("/").get(getEvents).post(createEvent);

export default router;
