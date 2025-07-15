import React, { useState } from "react";
import Home from "./components/Home";
import CreateTask from "./components/CreateTask";
import TasksList from "./components/TasksList";
import Container from "./components/Container";
import TaskProvider from "./context/TaskProvider";
import Counter from "./components/Counter";

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

  const completeTask = (id) => {
    setTasks(
      tasks.map((x) =>
        x.id === id ? { ...x, isCompleted: !x.isCompleted } : x
      )
    );
  };

  return (
    <>
      <Container>
        {/* <TaskProvider> */}
          <Home />
          <CreateTask/>
          <TasksList       
            
          />
        {/* </TaskProvider> */}
      </Container>
      {/* <Counter/> */}
    </>
  );
};

export default App;
