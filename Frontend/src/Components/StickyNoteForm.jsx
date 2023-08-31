import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const StickyNoteForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState(
    initialData || { title: "", content: "" }
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (initialData) {
        // Update existing note
        await axios.put(
          `http://localhost:4000/api/stickyNotes/${initialData._id}`,
          formData
        );
      } else {
        // Create new note
        await axios.post(
          "http://localhost:4000/api/stickyNotes/create",
          formData
        );
      }
      // Clear the form data after submission
      setFormData({ title: "", content: "" });
      onSubmit();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
        <label className="block mb-2 font-semibold">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />
        <label className="block mb-2 font-semibold">Content</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          className="w-full p-2 border rounded resize-none"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-4 rounded"
        >
          {initialData ? "Update Note" : "Create Note"}
        </button>
      </form>
    </>
  );
};

StickyNoteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};

export default StickyNoteForm;
