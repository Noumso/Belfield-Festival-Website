import express from "express";
import Artist from "../models/Artist.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const artists = await Artist.find();
  res.json(artists);
});

export default router;
