import Ticket from "../models/Ticket.js";
import asyncHandler from "../middleware/asyncHandler.js";

export const createTicket = asyncHandler(async (req, res) => {
  const ticket = new Ticket(req.body);
  await ticket.save();
  res.status(201).json(ticket);
});

export const getTickets = asyncHandler(async (req, res) => {
  const tickets = await Ticket.find().sort({ createdAt: -1 });
  res.json(tickets);
});
