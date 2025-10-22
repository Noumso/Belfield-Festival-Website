import Contact from "../models/contactModel.js";
import asyncHandler from "../middleware/asyncHandler.js";
import sendEmail from "../utils/sendEmail.js";

export const submitContact = asyncHandler(async (req, res) => {
  const { name, email, subject, message } = req.body;
  const c = new Contact({ name, email, subject, message });
  await c.save();

  try {
    await sendEmail({
      to: process.env.ADMIN_EMAIL,
      subject: `Contact form — ${subject || "No subject"}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
  } catch (err) {
    console.warn("Email send failed:", err.message);
  }

  res.status(201).json({ message: "Message received" });
});
