import Volunteer from "../models/volunteerModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

export const applyVolunteer = asyncHandler(async (req, res) => {
  const vol = new Volunteer(req.body);
  await vol.save();
  res.status(201).json({ message: "Application received", vol });
});

export const getVolunteers = asyncHandler(async (req, res) => {
  const vols = await Volunteer.find().sort({ createdAt: -1 });
  res.json(vols);
});

export const getVolunteer = asyncHandler(async (req, res) => {
  const vol = await Volunteer.findById(req.params.id);
  if (!vol) {
    res.status(404);
    throw new Error("Volunteer not found");
  }
  res.json(vol);
});

export const updateVolunteer = asyncHandler(async (req, res) => {
  const vol = await Volunteer.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!vol) {
    res.status(404);
    throw new Error("Volunteer not found");
  }
  res.json(vol);
});

export const deleteVolunteer = asyncHandler(async (req, res) => {
  const vol = await Volunteer.findByIdAndDelete(req.params.id);
  if (!vol) {
    res.status(404);
    throw new Error("Volunteer not found");
  }
  res.json({ message: "Volunteer removed" });
});
