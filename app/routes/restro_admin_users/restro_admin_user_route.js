import { default as handlers } from './index.js';
import express from 'express';

const router = express.Router();

// Create a new restro admin user
router.post('/create', handlers.createRestroAdminUser);

// Get all restro admin users
router.get('/fetch', handlers.getAllRestroAdminUsers);

// Get a restro admin user by ID
router.get('/fetch/:id', handlers.getRestroAdminUserById);

// Update a restro admin user
router.put('/update/:id', handlers.updateRestroAdminUser);

// Delete a restro admin user
router.delete('/delete/:id', handlers.deleteRestroAdminUser);

export default router;
