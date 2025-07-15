import React from "react";

const Task = ({ job: { id, task, isCompleted }, removeTask , completeTask}) => {
  const handleDeleteTask = () => {
    if (confirm("Are you sure you want to delete this task?")) {
      removeTask(id);
    }
  };

  const handleCompleteTask = () => {
    completeTask(id);
  };
  return (
    <div className="flex justify-between border gap-2 px-4 py-2 mb-2">
      <input type="checkbox" onChange={handleCompleteTask} checked={isCompleted} />
      <p className={ `${isCompleted ? "line-through" : ""}`}>{task}</p>
      <button
        className="border px-2 py-1 bg-red-200 text-gray-600 border-red-200 hover:bg-red-300 hover:duration-100 cursor-pointer shadow-[3px_3px_0px_0px_#000] active:translate-x-[3px] active:shadow-none active:translate-y-[3px]"
        onClick={handleDeleteTask}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
