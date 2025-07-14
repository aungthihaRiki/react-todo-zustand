import React from "react";

const Task = ({ job: { id, task, isComplete }, removeTask }) => {
  const handleDeleteTask = () => {
    if (confirm("Are you sure you want to delete this task?")) {
      removeTask(id);
    }
  };
  return (
    <div className="flex justify-between border px-4 py-2 mb-2">
      <p>{task}</p>
      <button
        className="border px-2 py-1 bg-red-200 text-gray-600 border-red-200 hover:bg-red-300 hover:duration-100 cursor-pointer active:scale-90"
        onClick={handleDeleteTask}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
