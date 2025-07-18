const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const { signUp, login, deleteUser ,refresh } = require('../controller/authController');

router.post('/signup', signUp);
router.post('/login', login);
router.delete('/deleteUser', protect, deleteUser);
router.get('/refresh', refresh);

module.exports = router;
