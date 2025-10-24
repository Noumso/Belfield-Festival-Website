import express from "express";
import {
  getArtists, getArtist, createArtist, updateArtist, deleteArtist
} from "../controllers/artistController.js";
import { validateArtist } from "../middleware/validate.js";
import { protectAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getArtists);
router.get("/:id", getArtist);

router.post("/", protectAdmin, validateArtist, createArtist);
router.put("/:id", protectAdmin, validateArtist, updateArtist);
router.delete("/:id", protectAdmin, deleteArtist);

export default router;
