const express = require('express');
const { getAllTasks, updateAnyTask, deleteAnyTask } = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

const router = express.Router();

router.get('/tasks', authMiddleware, roleMiddleware('Admin'), getAllTasks);
router.put('/tasks/:id', authMiddleware, roleMiddleware('Admin'), updateAnyTask);
router.delete('/tasks/:id', authMiddleware, roleMiddleware('Admin'), deleteAnyTask);

module.exports = router;
