import RestroAdminUser from '../../models/restro_admin_users.js';

export const createRestroAdminUser = async (req, res) => {
  const { name, email, password, restaurant } = req.body;
  try {
    const newUser = new RestroAdminUser({ name, email, password, restaurant });
    const savedUser = await newUser.save();
    res.status(201).json({ message: "create successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
