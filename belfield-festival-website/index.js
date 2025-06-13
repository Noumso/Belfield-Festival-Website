import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './db.js';

// Routes
import authRoutes from './routes/auth.js';
import artistsRoutes from './routes/artists.js';
import eventsRoutes from './routes/events.js';
import infoRoutes from './routes/info.js';
import mediaRoutes from './routes/media.js';
import scheduleRoutes from './routes/schedule.js';
import ticketsRoutes from './routes/tickets.js';
import usersRoutes from './routes/users.js';

// Load environment variables from .env file
import process from 'process';
dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Routes publiques
app.use('/api/auth', authRoutes);
app.use('/api/artists', artistsRoutes);
app.use('/api/events', eventsRoutes);
app.use('/api/info', infoRoutes);
app.use('/api/media', mediaRoutes);
app.use('/api/schedule', scheduleRoutes);
app.use('/api/tickets', ticketsRoutes);
app.use('/api/users', usersRoutes);


// Route racine simple test
app.get('/', (req, res) => {
  res.send('Bienvenue sur le site Belfield Festival API!');
});
// Ensure process.env is defined and PORT is set
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
