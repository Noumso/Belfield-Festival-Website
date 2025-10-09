import express from "express";
import {
  getGallery,
  createGalleryItem,
} from "../controllers/galleryController.js";

const router = express.Router();

// Liste la galerie ou ajoute une nouvelle image
router.route("/").get(getGallery).post(createGalleryItem);

export default router;
