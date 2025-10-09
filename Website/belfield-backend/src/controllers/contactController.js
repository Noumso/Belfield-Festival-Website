import Contact from "../models/Contact.js";
import asyncHandler from "../middleware/asyncHandler.js";
import sendEmail from "../utils/sendEmail.js";

export const submitContact = asyncHandler(async (req, res) => {
  const { name, email, subject, message } = req.body;
  const c = new Contact({ name, email, subject, message });
  await c.save();

  await sendEmail({
    to: process.env.ADMIN_EMAIL,
    subject: `Contact — ${subject}`,
    text: `${name} <${email}>\\n\\n${message}`,
  });

  res.status(201).json({ message: "Message envoyé" });
});
