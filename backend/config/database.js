import mongoose from 'mongoose';

export const connectDatabase = async () => {
  try {
    console.log(process.env.DATABASE_LOCAL);
    const conn = await mongoose.connect(process.env.DATABASE_LOCAL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
