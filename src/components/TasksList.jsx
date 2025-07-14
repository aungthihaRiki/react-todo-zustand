import React from "react";
import Task from "./Task";

const TasksList = ({ tasks , removeTask}) => {
  return (
    <>
      <div>
        Task Lists (Total - {tasks.length}, Done - 
        {tasks.filter((task) => task.isComplete).length})
      </div>
      {tasks.map((task) => {
        return <Task key={task.id} job={task} removeTask={removeTask} />;
      })}
    </>
  );
};

export default TasksList;
