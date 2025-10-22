import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    purchaserName: String,
    purchaserEmail: { type: String, required: true },
    quantity: { type: Number, default: 1 },
    type: { type: String, required: true },
    paymentStatus: { type: String, enum: ["pending", "paid", "cancelled"], default: "pending" },
    orderId: String,
    meta: Object
  },
  { timestamps: true }
);

export default mongoose.model("Ticket", ticketSchema);
