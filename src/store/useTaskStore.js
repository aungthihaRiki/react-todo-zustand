import { create } from "zustand";

const useTaskStore = create((set) => ({
  tasks: [
    {
      id: "task001",
      task: "Prepare presentation for Q3 marketing review.",
      isCompleted: true,
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
  ],
  addNewTask: (id, taskName, isCompleted) => {
    set((state) => ({
        tasks: [...state.tasks, {id: id, task: taskName, isCompleted: isCompleted }]
    }))
  },
  removeTask: (taskId) => {
    set((state) => ({
      tasks: state.tasks.filter((x) => x.id !== taskId),
    }));
  },
  completeTask: (taskId) => {
    set((state) => ({tasks: state.tasks.map((x) => x.id == taskId ? {...x, isCompleted: !x.isCompleted} : x )}))
  },
}));

export default useTaskStore;
