import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function TaskForm({ onSuccess }) {
  const [form, setForm] = useState({ title: '', description: '', priority: 'Low' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      alert("⚠️ Please login to add tasks.");
      navigate("/login");
      return;
    }
  
    try {
      await API.post('/tasks', form);
      setForm({ title: '', description: '', priority: 'Low' });
      onSuccess();
    } catch (err) {
      console.error(err);
      alert("Failed to add task. Please try again.");
    }
  };
  

  return (
    <form
      className="space-y-2 p-4 border rounded shadow bg-white dark:bg-gray-800 text-black dark:text-white"
      onSubmit={handleSubmit}
    >
      <input
        className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white p-2 w-full rounded"
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <textarea
        className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white p-2 w-full rounded"
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <select
        className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white p-2 w-full rounded"
        value={form.priority}
        onChange={(e) => setForm({ ...form, priority: e.target.value })}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
        Add Task
      </button>
    </form>
  );
}
