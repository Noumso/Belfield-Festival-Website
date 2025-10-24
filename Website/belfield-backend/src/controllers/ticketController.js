import Ticket from "../models/ticketModel.js";
import asyncHandler from "../middleware/asyncHandler.js";
import Stripe from "stripe";
import { sendEmail } from "../utils/mailgun.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

// Ticket Controllers
const sendTicketConfirmationEmail = async (ticket, paymentIntent) => {
  const html = `
    <h2>🎟️ Confirmation de votre billet - Belfield Festival</h2>
    <p>Bonjour ${ticket.purchaserName || "cher participant"},</p>
    <p>Merci pour votre achat ! Votre billet pour le <strong>Belfield Festival</strong> est confirmé.</p>
    <ul>
      <li><strong>Type :</strong> ${ticket.type}</li>
      <li><strong>Quantité :</strong> ${ticket.quantity}</li>
      <li><strong>Montant :</strong> ${paymentIntent.amount_received / 100} €</li>
      <li><strong>Commande :</strong> ${paymentIntent.id}</li>
    </ul>
    <p>🎶 Nous avons hâte de vous voir à Caussade !</p>
    <hr/>
    <p>— L’équipe du Belfield Festival</p>
  `;

  await sendEmail({
    to: ticket.purchaserEmail,
    subject: "🎟️ Votre billet Belfield Festival est confirmé",
    html,
    text: `Merci ${ticket.purchaserName || ""}, votre billet est confirmé.`,
  });
};

// GET /api/tickets
export const getTickets = asyncHandler(async (req, res) => {
  const tickets = await Ticket.find().sort({ createdAt: -1 });
  res.json(tickets);
});

// GET /api/tickets/:id
export const getTicket = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    res.status(404);
    throw new Error("Ticket not found");
  }
  res.json(ticket);
});

// POST /api/tickets
// Create a ticket with payment flow: create DB ticket (pending) and create PaymentIntent
export const createTicket = asyncHandler(async (req, res) => {
  const { purchaserName, purchaserEmail, quantity = 1, type, amount } = req.body;
  if (!purchaserEmail || !type) {
    res.status(400);
    throw new Error("purchaserEmail and type are required");
  }

  // Create DB ticket (pending)
  const ticket = new Ticket({
    purchaserName,
    purchaserEmail,
    quantity,
    type,
    paymentStatus: amount ? "pending" : "paid",
    meta: { frontend: "belfield" }
  });
  await ticket.save();

  // If amount provided and Stripe configured -> create PaymentIntent
  if (amount && process.env.STRIPE_SECRET_KEY) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency: "eur",
      receipt_email: purchaserEmail,
      metadata: { ticketId: ticket._id.toString(), type }
    });
    return res.status(201).json({ ticket, clientSecret: paymentIntent.client_secret });
  }

  res.status(201).json({ ticket });
});

// PUT /api/tickets/:id
export const updateTicket = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!ticket) {
    res.status(404);
    throw new Error("Ticket not found");
  }
  res.json(ticket);
});

// DELETE /api/tickets/:id
export const deleteTicket = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findByIdAndDelete(req.params.id);
  if (!ticket) {
    res.status(404);
    throw new Error("Ticket not found");
  }
  res.json({ message: "Ticket removed" });
});

// Stripe webhook handler to mark ticket as paid
export const handleStripeWebhook = asyncHandler(async (req, res) => {
  const sig = req.headers["stripe-signature"];
  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    console.warn("No STRIPE_WEBHOOK_SECRET configured");
    return res.status(400).send("Webhook not configured");
  }
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error("Webhook signature verification failed.", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "payment_intent.succeeded") {
    const paymentIntent = event.data.object;
    const ticketId = paymentIntent.metadata && paymentIntent.metadata.ticketId;
    if (ticketId) {
      await Ticket.findByIdAndUpdate(ticketId, { paymentStatus: "paid", orderId: paymentIntent.id });
      console.log("Ticket marked paid:", ticketId);
    }
  }
  res.json({ received: true });
});
