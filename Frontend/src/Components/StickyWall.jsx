import React, { useState, useEffect } from "react";
import StickyNote from "../Components/StckyNote";
import StickyNoteForm from "../Components/StickyNoteForm";
import axios from "axios";

const StickyWall = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/stickyNotes/all"
      );
      setNotes(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const createNote = async (position) => {
    try {
      const newNote = { title: "", content: "", position };
      const response = await axios.post(
        "http://localhost:4000/api/stickyNotes/create",
        newNote
      );
      setNotes((prevNotes) => [...prevNotes, response.data]);
    } catch (error) {
      console.error("Error creating note:", error);
    }
  };

  const handleNoteDelete = async (deletedNoteId) => {
    try {
      await axios.delete(
        `http://localhost:4000/api/stickyNotes/${deletedNoteId}`
      );
      setNotes(notes.filter((note) => note._id !== deletedNoteId));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const handleNoteUpdate = () => {
    fetchNotes();
  };

  return (
    <>
      <StickyNoteForm onSubmit={createNote} />
      <div className="bg-gray-100 grid grid-cols-3 m-4">
        {notes.map((note) => (
          <StickyNote
            key={note._id}
            note={note}
            onDelete={handleNoteDelete}
            onUpdate={handleNoteUpdate}
          />
        ))}
      </div>
    </>
  );
};

export default StickyWall;
