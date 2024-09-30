import mongoose from 'mongoose';

const restroAdminUserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },  // Reference to the Restaurant model
}, {
  timestamps: true,  // Automatically add createdAt and updatedAt fields
});

const RestroAdminUser = mongoose.model('RestroAdminUser', restroAdminUserSchema);

export default RestroAdminUser;
