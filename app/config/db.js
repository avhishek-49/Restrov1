import mongoose from 'mongoose';

const connectDB = async () => {
    mongoose.set('strictQuery', true);     
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to the database');
    } catch (err) {
        console.error('Database connection error:', err);
    }
};

export default connectDB;
