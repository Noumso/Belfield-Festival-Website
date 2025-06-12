import express from 'express';
const router = express.Router();

// Exemple route admin protégée
router.get('/', (req, res) => {
  res.send('Dashboard admin - accès réservé');
});

export default router;
