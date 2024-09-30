import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import mainRoutes from './routes/route.js';

dotenv.config();

const app = express();
app.use(express.json());
connectDB();
app.use('/api/v1', mainRoutes);
const PORT = process.env.PORT || 3309;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} `);
});
