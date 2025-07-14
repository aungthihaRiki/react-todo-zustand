import React, { useState } from "react";
import Home from "./components/Home";
import CreateTask from "./components/CreateTask";
import TasksList from "./components/TasksList";
import Container from "./components/Container";

const App = () => {
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

  return (
    <>
      <Container>
        <Home />
        <CreateTask addNewTask={addNewTask} />
        <TasksList tasks={tasks} removeTask={removeTask} />
      </Container>
    </>
  );
};

export default App;
