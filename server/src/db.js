import mongoose from 'mongoose';

export default async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);

    console.log('Connected to database successfully');
  } catch (error) {
    console.error(error);
    console.log("Couldn't connect to database");
  }
};
