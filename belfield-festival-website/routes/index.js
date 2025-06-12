import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Bienvenue sur le site officiel du Belfield Festival !');
});

export default router;
