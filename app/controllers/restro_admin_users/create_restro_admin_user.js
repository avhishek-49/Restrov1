import RestroAdminUser from '../../models/restro_admin_users.js';
import Owner from '../../models/resro_owners.js';

export const createRestroAdminUser = async (req, res) => {
  const { name, email, password, restaurant, ownerName, mobilePhone, panNumber } = req.body;
  try {
    const newUser = new RestroAdminUser({ name, email, password, restaurant });
   await newUser.save();

   const owner = new Owner({
    name: 'lalit sunar',
    mobilePhone: '123-456-7890',
    panNumber: 'ABCDE1234F',
    email: 'lalit@example.com',
    adminUser: newUser._id,  // Link to the admin user
  });
    const ownerInfo = new Owner(owner);
    await ownerInfo.save();
    res.status(201).json({ message: "create successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
