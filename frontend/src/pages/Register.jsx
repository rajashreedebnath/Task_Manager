import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { useDarkMode } from "../hooks/useDarkMode";

export default function Register() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useDarkMode();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", form);
      navigate("/login");
    } catch (err) {
      setError("Registration failed. User may already exist.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors">
      {/* Dark Mode Toggle */}
      <div className="absolute top-4 right-4">
        <button onClick={() => setDarkMode(!darkMode)} className="px-3 py-1">
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      <form
        className="bg-white dark:bg-gray-800 p-6 rounded shadow w-80 space-y-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold text-center">Register</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <input
          className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full">
          Register
        </button>
        <p className="text-sm text-center">
          Already have an account?{" "}
          <a className="text-blue-500 dark:text-blue-400" href="/login">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
