import express from 'express';
import Media from '../models/Media.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const media = await Media.find();
    res.json(media);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const media = new Media(req.body);
  try {
    const newMedia = await media.save();
    res.status(201).json(newMedia);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const mediaItem = await Media.findById(req.params.id);
    if (!mediaItem) return res.status(404).json({ message: 'Media not found' });
    res.json(mediaItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const mediaItem = await Media.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!mediaItem) return res.status(404).json({ message: 'Media not found' });
    res.json(mediaItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const mediaItem = await Media.findByIdAndDelete(req.params.id);
    if (!mediaItem) return res.status(404).json({ message: 'Media not found' });
    res.json({ message: 'Media deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
