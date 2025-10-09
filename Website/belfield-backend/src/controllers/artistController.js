import Artist from "../models/Artist.js";
import asyncHandler from "../middleware/asyncHandler.js";

export const getArtists = asyncHandler(async (req, res) => {
  const artists = await Artist.find().sort({ order: 1, name: 1 });
  res.json(artists);
});

export const getArtist = asyncHandler(async (req, res) => {
  const artist = await Artist.findById(req.params.id);
  if (!artist) {
    res.status(404);
    throw new Error("Artist not found");
  }
  res.json(artist);
});

export const createArtist = asyncHandler(async (req, res) => {
  const artist = new Artist(req.body);
  await artist.save();
  res.status(201).json(artist);
});

export const updateArtist = asyncHandler(async (req, res) => {
  const artist = await Artist.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!artist) {
    res.status(404);
    throw new Error("Artist not found");
  }
  res.json(artist);
});

export const deleteArtist = asyncHandler(async (req, res) => {
  const artist = await Artist.findByIdAndDelete(req.params.id);
  if (!artist) {
    res.status(404);
    throw new Error("Artist not found");
  }
  res.json({ message: "Artist deleted" });
});
