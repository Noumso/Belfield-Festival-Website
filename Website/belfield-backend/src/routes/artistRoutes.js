import express from "express";
import {
  getArtists,
  getArtist,
  createArtist,
  updateArtist,
  deleteArtist,
} from "../controllers/artistController.js";

const router = express.Router();

// GET tous les artistes / POST un nouvel artiste
router.route("/").get(getArtists).post(createArtist);

// GET / PUT / DELETE un artiste par ID
router.route("/:id").get(getArtist).put(updateArtist).delete(deleteArtist);

export default router;
