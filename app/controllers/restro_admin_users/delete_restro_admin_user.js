import RestroAdminUser from '../../models/restro_admin_users.js';

export const deleteRestroAdminUser = async (req, res) => {
  try {
    const user = await RestroAdminUser.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    await user.deleteOne();
    res.json({ message: 'User removed' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
