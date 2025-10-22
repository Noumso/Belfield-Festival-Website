import express from "express";
import {
  getEvents, getEvent, createEvent, updateEvent, deleteEvent
} from "../controllers/eventController.js";
import { validateEvent } from "../middleware/validate.js";
import { protectAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getEvents);
router.get("/:id", getEvent);

router.post("/", protectAdmin, validateEvent, createEvent);
router.put("/:id", protectAdmin, validateEvent, updateEvent);
router.delete("/:id", protectAdmin, deleteEvent);

export default router;
