const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const { getUsers } = require('../db');

// @route   GET api/users
// @desc    Get all users (Admin only)
// @access  Private/Admin
router.get('/', [auth, admin], (req, res) => {
    try {
        const users = getUsers();
        const usersWithoutPassword = users.map(user => {
            const { password, ...rest } = user;
            return rest;
        });
        res.json(usersWithoutPassword);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
