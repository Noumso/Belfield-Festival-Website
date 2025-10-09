import express from "express";
import {
  applyVolunteer,
  getVolunteers,
} from "../controllers/volunteerController.js";

const router = express.Router();

// POST candidature bénévole / GET liste des bénévoles
router.route("/").get(getVolunteers).post(applyVolunteer);

export default router;
