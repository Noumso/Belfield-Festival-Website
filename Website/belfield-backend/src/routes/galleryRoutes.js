import express from "express";
import {
  getGallery, getGalleryItem, createGalleryItem, updateGalleryItem, deleteGalleryItem
} from "../controllers/galleryController.js";
import { protectAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getGallery);
router.get("/:id", getGalleryItem);

router.post("/", protectAdmin, createGalleryItem);
router.put("/:id", protectAdmin, updateGalleryItem);
router.delete("/:id", protectAdmin, deleteGalleryItem);

export default router;
