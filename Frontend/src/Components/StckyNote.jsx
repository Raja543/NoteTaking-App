import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import StickyNoteForm from "../Components/StickyNoteForm";

const StickyNote = ({ note, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDeleteClick = async () => {
    try {
      await axios.delete(`http://localhost:4000/api/stickyNotes/${note._id}`);
      onDelete(note._id);
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const handleFormSubmit = () => {
    setIsEditing(false);
    onUpdate();
  };

  return (
    <div className="bg-yellow-200 p-4 m-4 rounded shadow-md">
      {isEditing ? (
        <StickyNoteForm onSubmit={handleFormSubmit} initialData={note} />
      ) : (
        <div className="col-span-3">
          <h3 className="text-lg font-semibold mb-2">{note.title}</h3>
          <p className="text-gray-700 mb-4">{note.content}</p>
          <div className="flex justify-end space-x-2">
            <button
              onClick={handleEditClick}
              className="text-blue-500 hover:underline"
            >
              Edit
            </button>
            <button
              onClick={handleDeleteClick}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

StickyNote.propTypes = {
  note: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    position: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default StickyNote;
