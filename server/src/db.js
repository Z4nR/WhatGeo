const mongoose = require('mongoose');

module.exports = async () => {
  try {
    mongoose.Promise = global.Promise;

    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    });

    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    throw error;
  }

  mongoose.connection.on('connected', () => {
    console.log('MongoDB event: connected');
  });

  mongoose.connection.on('error', (err) => {
    console.error('MongoDB event error:', err);
  });

  mongoose.connection.on('disconnected', () => {
    console.warn('MongoDB event: disconnected');
  });
};
