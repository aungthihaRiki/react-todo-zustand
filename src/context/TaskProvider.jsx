import React, { useState } from "react";
import TaskContext  from "./TaskContext.js";

function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([
    {
      id: "task001",
      task: "Prepare presentation for Q3 marketing review.",
      isCompleted: false,
    },
    {
      id: "task002",
      task: "Review and approve latest design mockups.",
      isCompleted: false,
    },
    {
      id: "task003",
      task: "Follow up with client on project feedback.",
      isCompleted: true,
    },
    {
      id: "task004",
      task: "Research new CRM software options.",
      isCompleted: false,
    },
  ]);

  const addNewTask = (id, newTask, isComplete) => {
    setTasks([...tasks, { id: id, task: newTask, isCompleted: isComplete }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((x) => x.id !== id));
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((x) =>
        x.id === id ? { ...x, isCompleted: !x.isCompleted } : x
      )
    );
  };
  return (
    <TaskContext.Provider
      value={{ tasks, addNewTask, removeTask, completeTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
