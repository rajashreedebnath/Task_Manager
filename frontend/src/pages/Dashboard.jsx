import { useTasks } from "../hooks/useTasks";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode";

export default function Dashboard() {
  const { tasks, fetchTasks, filter, setFilter } = useTasks();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useDarkMode();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors flex justify-center items-start pt-8">
      <div className="max-w-4xl">
        {/* Dark Mode Toggle */}
        <div className="absolute top-4 right-4">
          <button onClick={() => setDarkMode(!darkMode)} className="px-3 py-1">
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
        {/* Header with Logout*/}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Your Tasks</h1>
          <div className="flex gap-3 items-center">

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-1 rounded"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Task Form */}
        <TaskForm onSuccess={fetchTasks} />

        {/* Filter Buttons */}
        <div className="flex gap-2 mt-4">
          {["All", "Active", "Completed"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded transition-colors ${
                filter === f
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Task List */}
        <div className="grid gap-4 mt-4">
          {tasks.length ? (
            tasks.map((task) => (
              <TaskCard key={task._id} task={task} onUpdate={fetchTasks} />
            ))
          ) : (
            <p className="text-gray-600 dark:text-gray-300">No tasks found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
