const express = require("express");
const { createTask } = require("../Controllers/TaskController");
const router = express.Router();

router.post("/api/tasks", createTask);

module.exports = router;
