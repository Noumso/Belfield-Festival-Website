import express from "express";
import {
  getTickets, getTicket, createTicket, updateTicket, deleteTicket, handleStripeWebhook
} from "../controllers/ticketController.js";
import { validateTicket } from "../middleware/validate.js";
import { protectAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getTickets);
router.get("/:id", getTicket);

// Create ticket and create PaymentIntent (if amount provided)
router.post("/", validateTicket, createTicket);

// Admin protected modifications
router.put("/:id", protectAdmin, updateTicket);
router.delete("/:id", protectAdmin, deleteTicket);

// Stripe webhook (raw body required)
router.post("/webhook", handleStripeWebhook);

export default router;
