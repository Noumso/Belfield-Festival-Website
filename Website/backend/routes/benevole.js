import express from "express";
import Benevole from "../models/Benevole.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, phone, availability } = req.body;
  const benevole = new Benevole({ name, email, phone, availability });
  await benevole.save();
  res.json({ success: true, message: "Inscription bénévole reçue !" });
});

export default router;
