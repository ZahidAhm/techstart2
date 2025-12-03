const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { saveUser, findUserByEmail, findUserById } = require('../db');
const auth = require('../middleware/auth');
const { v4: uuidv4 } = require('uuid');

// @route   POST api/auth/signup
// @desc    Register user
// @access  Public
router.post('/signup', async (req, res) => {
    const { email, password, role } = req.body;

    try {
        let user = findUserByEmail(email);

        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = {
            id: uuidv4(),
            email,
            password: hashedPassword,
            role: role || 'user', // Default to 'user', allow 'admin' if sent (for now)
            createdAt: new Date(),
        };

        saveUser(user);

        const payload = {
            user: {
                id: user.id,
                role: user.role,
            },
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err;
                res.json({ token, user: { email: user.email, role: user.role } });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route   POST api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = findUserByEmail(email);

        if (!user) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const payload = {
            user: {
                id: user.id,
                role: user.role,
            },
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err;
                res.json({ token, user: { email: user.email, role: user.role } });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route   GET api/auth/user
// @desc    Get logged in user
// @access  Private
router.get('/user', auth, async (req, res) => {
    try {
        const user = findUserById(req.user.id);
        if (!user) return res.status(404).json({ msg: 'User not found' });
        const { password, ...userWithoutPassword } = user;
        res.json(userWithoutPassword);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
