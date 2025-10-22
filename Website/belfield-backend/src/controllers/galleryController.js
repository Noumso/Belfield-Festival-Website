import Gallery from "../models/galleryModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

export const getGallery = asyncHandler(async (req, res) => {
  const items = await Gallery.find({ visible: true }).sort({ createdAt: -1 });
  res.json(items);
});

export const getGalleryItem = asyncHandler(async (req, res) => {
  const item = await Gallery.findById(req.params.id);
  if (!item) {
    res.status(404);
    throw new Error("Gallery item not found");
  }
  res.json(item);
});

export const createGalleryItem = asyncHandler(async (req, res) => {
  const item = new Gallery(req.body);
  await item.save();
  res.status(201).json(item);
});

export const updateGalleryItem = asyncHandler(async (req, res) => {
  const item = await Gallery.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!item) {
    res.status(404);
    throw new Error("Gallery item not found");
  }
  res.json(item);
});

export const deleteGalleryItem = asyncHandler(async (req, res) => {
  const item = await Gallery.findByIdAndDelete(req.params.id);
  if (!item) {
    res.status(404);
    throw new Error("Gallery item not found");
  }
  res.json({ message: "Gallery item removed" });
});
