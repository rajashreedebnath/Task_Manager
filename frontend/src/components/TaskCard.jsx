import API from "../services/api";

export default function TaskCard({ task, onUpdate }) {
  const toggleStatus = async () => {
    try {
      await API.put(`/tasks/${task._id}`, {
        status: task.status === "complete" ? "incomplete" : "complete",
      });
      onUpdate();
    } catch (err) {
      console.error(err);
      alert("Failed to update task status.");
    }
  };
  

  const deleteTask = async () => {
    await API.delete(`/tasks/${task._id}`);
    onUpdate();
  };

  return (
    <div className="p-4 border rounded shadow bg-white dark:bg-gray-800 text-black dark:text-white flex justify-between items-center">
      <div>
        <h3 className="font-bold">{task.title}</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300">{task.description}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">Priority: {task.priority}</p>
      </div>
      <div className="space-x-2">
        <button
          className="text-blue-600 dark:text-blue-400"
          onClick={toggleStatus}
        >
          {task.status === "complete" ? "Undo" : "Complete"}
        </button>
        <button
          className="text-red-600 dark:text-red-400"
          onClick={deleteTask}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
