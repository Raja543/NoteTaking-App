import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateTaskForm from "../Components/CreateTaskForm";
import Sidebar from "../Components/Sidebar";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleTaskCreated = () => {
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <>
      <div className="flex flex-row p-4">
        <Sidebar />
        <div>
          <div>
            <h1>Current Tasks</h1>
            <CreateTaskForm onTaskCreated={handleTaskCreated} />
            <ul>
              {tasks.map((task) => (
                <li key={task._id}>
                  <h2>{task.title}</h2>
                  <p>{task.description}</p>
                  <p>Due Date: {task.dueDate}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
