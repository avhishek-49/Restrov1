import mongoose from 'mongoose';

const ownerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobilePhone: { type: String, required: true },
  panNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  adminUser: { type: mongoose.Schema.Types.ObjectId, ref: 'RestroAdminUser' }, // Reference to the RestroAdminUser
}, {
  timestamps: true,  // Automatically add createdAt and updatedAt fields
});

const Owner = mongoose.model('Owner', ownerSchema);

export default Owner;
