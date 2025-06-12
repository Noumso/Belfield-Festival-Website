import express from 'express';
import { connectDB } from './db.js';
import indexRouter from './routes/index.js';
import artistsRouter from './routes/artists.js';
import scheduleRouter from './routes/schedule.js';
import ticketsRouter from './routes/tickets.js';
import usersRouter from './routes/users.js';
import adminRouter from './routes/admin.js';
import artistRoutes from './routes/artists.js';
import userRoutes from './routes/users.js';
import ticketRoutes from './routes/tickets.js';
import authRoutes from './routes/auth.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

await connectDB();

// Routes publiques
app.use('/', indexRouter);
app.use('/artists', artistsRouter);
app.use('/schedule', scheduleRouter);
app.use('/tickets', ticketsRouter);
app.use('/users', usersRouter);
app.use('/api/artists', artistRoutes);
app.use('/api/users', userRoutes);
app.use('/api/tickets', ticketRoutes);
app.use('/api/auth', authRoutes);

// Route admin
app.use('/admin', adminRouter);

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
