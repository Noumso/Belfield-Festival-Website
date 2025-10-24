import Event from "../models/eventModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

export const getEvents = asyncHandler(async (req, res) => {
  const events = await Event.find().sort({ date: 1 });
  res.json(events);
});

export const getEvent = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event) {
    res.status(404);
    throw new Error("Event not found");
  }
  res.json(event);
});

export const createEvent = asyncHandler(async (req, res) => {
  const event = new Event(req.body);
  await event.save();
  res.status(201).json(event);
});

export const updateEvent = asyncHandler(async (req, res) => {
  const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!event) {
    res.status(404);
    throw new Error("Event not found");
  }
  res.json(event);
});

export const deleteEvent = asyncHandler(async (req, res) => {
  const event = await Event.findByIdAndDelete(req.params.id);
  if (!event) {
    res.status(404);
    throw new Error("Event not found");
  }
  res.json({ message: "Event removed" });
});
