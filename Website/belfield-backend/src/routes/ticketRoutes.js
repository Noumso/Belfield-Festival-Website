import express from "express";
import {
  createTicket,
  getTickets,
} from "../controllers/ticketController.js";

const router = express.Router();

// Création et récupération de billets
router.route("/").get(getTickets).post(createTicket);

export default router;
