import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await User.find().populate('tickets');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error });
  }
});

// Ajouter un utilisateur (sans authentification pour l'instant)
router.post('/', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: 'Erreur création utilisateur', error });
  }
});

export default router;
