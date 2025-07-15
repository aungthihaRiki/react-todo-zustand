import React, { useContext } from "react";
import Task from "./Task";
// import TaskContext from "../context/TaskContext";
import useTaskStore from "../store/useTaskStore";

const TasksList = () => {
  // const { tasks } = useContext(TaskContext);
  const { tasks } = useTaskStore();
  console.table(tasks);
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
