import Event from "../models/Event.js";
import asyncHandler from "../middleware/asyncHandler.js";

export const getEvents = asyncHandler(async (req, res) => {
  const events = await Event.find().sort({ date: 1 });
  res.json(events);
});

export const createEvent = asyncHandler(async (req, res) => {
  const event = new Event(req.body);
  await event.save();
  res.status(201).json(event);
});
