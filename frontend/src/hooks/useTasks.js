import { useEffect, useState } from "react";
import API from "../services/api";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const fetchTasks = async () => {
    const res = await API.get('/tasks');
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter(task => {
    if (filter === "Completed") return task.status === "complete";
    if (filter === "Active") return task.status === "incomplete";
    return true; // All
  });

  return { tasks: filteredTasks, fetchTasks, setFilter, filter };
};
