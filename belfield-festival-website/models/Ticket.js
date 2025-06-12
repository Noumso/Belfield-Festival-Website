import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  purchaseDate: { type: Date, default: Date.now },
  qrCode: { type: String } // optionnel, pour le QR code de validation
});

const Ticket = mongoose.model('Ticket', ticketSchema);

export default Ticket;
