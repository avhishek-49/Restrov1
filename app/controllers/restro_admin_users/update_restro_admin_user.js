import RestroAdminUser from '../../models/restro_admin_users.js';

export const updateRestroAdminUser = async (req, res) => {
  const { name, email, password, restaurant } = req.body;
  try {
    const user = await RestroAdminUser.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (name) user.name = name;
    if (email) user.email = email;
    if (password) user.password = password;
    if (restaurant) user.restaurant = restaurant;

    const updatedUser = await user.save();
    res.json({ message: "successfully updated" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
