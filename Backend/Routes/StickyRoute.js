const express = require("express");
const router = express.Router();
const stickyNotesController = require("../Controllers/StickyController");

router.post("/create", stickyNotesController.createNote);
router.get("/all", stickyNotesController.getAllNotes);
router.put("/:id", stickyNotesController.updateNote);
router.delete("/:id", stickyNotesController.deleteNote);

module.exports = router;
