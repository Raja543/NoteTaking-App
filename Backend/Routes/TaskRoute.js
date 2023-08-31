const express = require("express");
const { createTask } = require("../Controllers/TaskController");
const router = express.Router();

router.post("/tasks", createTask);


module.exports = router;
