import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    purchaserName: String,
    purchaserEmail: { type: String, required: true },
    quantity: { type: Number, default: 1 },
    type: String,
    externalOrderId: String,
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

export default mongoose.model("Ticket", ticketSchema);
