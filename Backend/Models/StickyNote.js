const mongoose = require("mongoose");

const stickyNoteSchema = new mongoose.Schema({
  title: String,
  content: String,
  position: {
    x: Number,
    y: Number,
  },
});

const StickyNote = mongoose.model("StickyNote", stickyNoteSchema);

module.exports = StickyNote;
