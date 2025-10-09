import express from "express";
import { submitContact } from "../controllers/contactController.js";

const router = express.Router();

// Envoi d’un message de contact
router.route("/").post(submitContact);

export default router;
