import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
  type: { type: String, required: true }, // ex: "VIP", "Standard"
  price: { type: Number, required: true },
  quantityAvailable: { type: Number, required: true },
  description: String,
}, { timestamps: true });

export default mongoose.model('Ticket', ticketSchema);
