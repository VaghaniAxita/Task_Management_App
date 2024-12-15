const express = require('express');
const { register, login, getAllUsers } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/users', authMiddleware, roleMiddleware('Admin'), getAllUsers);

module.exports = router;
