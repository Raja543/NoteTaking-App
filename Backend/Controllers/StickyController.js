const StickyNote = require("../Models/StickyNote");

exports.createNote = async (req, res) => {
  try {
    const { title, content, position } = req.body;
    const newNote = new StickyNote({ title, content, position });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ message: "Error creating note" });
  }
};

exports.getAllNotes = async (req, res) => {
  try {
    const notes = await StickyNote.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching notes" });
  }
};

exports.updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = await StickyNote.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: "Error updating note" });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    await StickyNote.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: "Error deleting note" });
  }
};
