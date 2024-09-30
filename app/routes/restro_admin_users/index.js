'use strict';

import { createRestroAdminUser } from '../../controllers/restro_admin_users/create_restro_admin_user.js';
import { getAllRestroAdminUsers, getRestroAdminUserById } from '../../controllers/restro_admin_users/get_restro_admin_user.js';
import { updateRestroAdminUser } from '../../controllers/restro_admin_users/update_restro_admin_user.js';
import { deleteRestroAdminUser } from '../../controllers/restro_admin_users/delete_restro_admin_user.js';

const moduleExports = {
    createRestroAdminUser,
    getAllRestroAdminUsers,
    getRestroAdminUserById,
    updateRestroAdminUser,
    deleteRestroAdminUser
};

export default moduleExports;
