import express from "express";
import {
  applyVolunteer, getVolunteers, getVolunteer, updateVolunteer, deleteVolunteer
} from "../controllers/volunteerController.js";
import { validateVolunteer } from "../middleware/validate.js";
import { protectAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", validateVolunteer, applyVolunteer);
router.get("/", protectAdmin, getVolunteers);
router.get("/:id", protectAdmin, getVolunteer);
router.put("/:id", protectAdmin, updateVolunteer);
router.delete("/:id", protectAdmin, deleteVolunteer);

export default router;
