import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function CreateTaskForm({ onTaskCreated }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/tasks', {
        title,
        description,
        dueDate,
      });

      if (response.status === 201) {
        // Task created successfully
        onTaskCreated();
        setTitle("");
        setDescription("");
        setDueDate("");
      }
    } catch (error) {
      // Handle error
      console.error("Error creating task:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">Create Task</button>
    </form>
  );
}

export default CreateTaskForm;

CreateTaskForm.propTypes = {
  onTaskCreated: PropTypes.func.isRequired,
};
