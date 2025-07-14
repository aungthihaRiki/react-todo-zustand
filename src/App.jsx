import React from "react";
import Home from "./components/Home";
import CreateTask from "./components/CreateTask";
import TasksList from "./components/TasksList";

const App = () => {
  return (
    <>
      <Home />
      <CreateTask />
      <TasksList />
    </>
  );
};

export default App;
