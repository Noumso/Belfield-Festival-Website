import Gallery from "../models/Gallery.js";
import asyncHandler from "../middleware/asyncHandler.js";

export const getGallery = asyncHandler(async (req, res) => {
  const items = await Gallery.find({ visible: true }).sort({ createdAt: -1 });
  res.json(items);
});

export const createGalleryItem = asyncHandler(async (req, res) => {
  const item = new Gallery(req.body);
  await item.save();
  res.status(201).json(item);
});
