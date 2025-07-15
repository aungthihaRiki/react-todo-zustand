import React, { useContext } from "react";
import Task from "./Task";
import TaskContext from "../context/TaskContext";

const TasksList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <>
      <div>
        Task Lists (Total - {tasks.length}, Done -
        {tasks.filter((task) => task.isCompleted).length})
      </div>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            job={task}
          />
        );
      })}
    </>
  );
};

export default TasksList;
