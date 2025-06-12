import express from 'express';
const router = express.Router();

// Récupérer le planning complet
router.get('/', (req, res) => {
  res.json([
    { id: 1, artist: 'DJ Example', day: 'Friday', stage: 'Main Stage', time: '22:00' },
    { id: 2, artist: 'Band Cool', day: 'Saturday', stage: 'Second Stage', time: '20:00' },
  ]);
});

export default router;
