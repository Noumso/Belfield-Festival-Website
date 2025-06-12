import express from 'express';
import Info from '../models/Info.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const infos = await Info.find();
    res.json(infos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const info = new Info(req.body);
  try {
    const newInfo = await info.save();
    res.status(201).json(newInfo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const info = await Info.findById(req.params.id);
    if (!info) return res.status(404).json({ message: 'Info not found' });
    res.json(info);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const info = await Info.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!info) return res.status(404).json({ message: 'Info not found' });
    res.json(info);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const info = await Info.findByIdAndDelete(req.params.id);
    if (!info) return res.status(404).json({ message: 'Info not found' });
    res.json({ message: 'Info deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
