import React from "react";
import Task from "./Task";

const TasksList = ({ tasks , removeTask, completeTask}) => {
  return (
    <>
      <div>
        Task Lists (Total - {tasks.length}, Done - 
        {tasks.filter((task) => task.isCompleted).length})
      </div>
      {tasks.map((task) => {
        return <Task key={task.id} job={task} removeTask={removeTask} completeTask={completeTask}/>;
      })}
    </>
  );
};

export default TasksList;
