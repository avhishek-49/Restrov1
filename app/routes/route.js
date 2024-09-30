'use strict';

import express from 'express';
const router = express.Router();

// Restro admin users
import restroAdminUserRoutes from './restro_admin_users/restro_admin_user_route.js';
router.use('/restro', restroAdminUserRoutes);

export default router;
