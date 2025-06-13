import mongoose from 'mongoose';
import dotenv from 'dotenv';
import process from 'node:process';
dotenv.config();

// Ensure MONGO_URI is defined
if (typeof globalThis.process !== 'undefined' && !globalThis.process.env.MONGO_URI) {
  throw new Error('MONGO_URI is not defined in the environment variables');
}

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
