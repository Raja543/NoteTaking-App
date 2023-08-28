const express = require("express");
const router = express.Router();
const Event = require("../Models/Event");

router.post("/", async (req, res) => {
  try {
    const { title, description, start_date, end_date } = req.body;
    const newEvent = new Event({
      title,
      description,
      start_date,
      end_date,
    });
    const savedEvent = await newEvent.save();
    res.json(savedEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
