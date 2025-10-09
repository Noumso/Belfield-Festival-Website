import Volunteer from "../models/Volunteer.js";
import asyncHandler from "../middleware/asyncHandler.js";

export const applyVolunteer = asyncHandler(async (req, res) => {
  const vol = new Volunteer(req.body);
  await vol.save();
  res.status(201).json({ message: "Volunteer application received" });
});

export const getVolunteers = asyncHandler(async (req, res) => {
  const vols = await Volunteer.find().sort({ createdAt: -1 });
  res.json(vols);
});
