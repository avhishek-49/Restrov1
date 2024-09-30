import RestroAdminUser from '../../models/restro_admin_users.js';

// Get all users
export const getAllRestroAdminUsers = async (req, res) => {
  try {
    const users = await RestroAdminUser.find().populate('restaurant');
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get user by ID
export const getRestroAdminUserById = async (req, res) => {
  try {
    const user = await RestroAdminUser.findById(req.params.id).populate('restaurant');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
