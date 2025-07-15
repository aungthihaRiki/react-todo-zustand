import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import TaskContext from "../context/TaskContext";
import useTaskStore from "../store/useTaskStore";

const CreateTask = () => {
  // const { addNewTask } = useContext(TaskContext);

  const { addNewTask } = useTaskStore();
  // console.log(useTaskStore());
  const [taskName, setTaskName] = useState("");

  const handleOnChange = (event) => {
    setTaskName(event.target.value)
  }

  const handleAddTaskBtn = () => {
    addNewTask(`task-${uuidv4()}`,taskName, false); 
    setTaskName('');
  }

  return (
    <div className="flex mb-3">
      <input
        type="text"
        value={taskName}
        onChange={handleOnChange}
        className="flex-grow border-2 border-gray-200 focus:outline-none px-2"
        placeholder="Write your new task here..."
      />
      <button className="border border-gray-200 bg-gray-200 text-gray-600 text-lg px-4 py-2" onClick={handleAddTaskBtn}>
        Add Task
      </button>
    </div>
  );
};

export default CreateTask;
