import express from "express";
import { sendEmail } from "../utils/mailgun.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Tous les champs sont requis." });
  }

  try {
    await sendEmail({
      to: process.env.MAIL_TO,
      subject: `📩 Nouveau message de ${name}`,
      text: `${message}\n\nDe : ${name} (${email})`,
      html: `
        <h2>Nouveau message du site Belfield Festival</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
    });

    res.json({ message: "Email envoyé avec succès !" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
