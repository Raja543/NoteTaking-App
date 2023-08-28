const express = require("express");
const taskController = require("../Controllers/TaskController");
const router = express.Router();

router.post('/api/tasks', taskController.createTask);

module.exports = router;
