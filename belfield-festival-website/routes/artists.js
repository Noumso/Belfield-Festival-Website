import express from 'express';
import Artist from '../models/Artist.js';

const router = express.Router();

// GET all artists
router.get('/', async (req, res) => {
  try {
    const artists = await Artist.find();
    res.json(artists);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET artist by ID
router.get('/:id', async (req, res) => {
  try {
    const artist = await Artist.findById(req.params.id);
    if (!artist) return res.status(404).json({ message: 'Artist not found' });
    res.json(artist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new artist
router.post('/', async (req, res) => {
  const { name, genre, description, image } = req.body;
  const artist = new Artist({ name, genre, description, image });

  try {
    const newArtist = await artist.save();
    res.status(201).json(newArtist);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PATCH update artist
router.patch('/:id', async (req, res) => {
  try {
    const updatedArtist = await Artist.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedArtist) return res.status(404).json({ message: 'Artist not found' });
    res.json(updatedArtist);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE artist
router.delete('/:id', async (req, res) => {
  try {
    const deletedArtist = await Artist.findByIdAndDelete(req.params.id);
    if (!deletedArtist) return res.status(404).json({ message: 'Artist not found' });
    res.json({ message: 'Artist deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
