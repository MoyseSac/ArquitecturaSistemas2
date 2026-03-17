import { useEffect, useState } from "react";
import type { Task } from "../api";
import { getTasks } from "../api";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTasks().then((data) => {
      setTasks(data);
      setLoading(false);
    });
  }, []);

  const handleCreated = (task: Task) => {
    setTasks((prev) => [task, ...prev]);
  };

  const handleUpdated = (updated: Task) => {
    setTasks((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
  };

  const handleDeleted = (id: number) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          📝 Todo App
        </h1>
        <TaskForm onTaskCreated={handleCreated} />
        {loading ? (
          <p className="text-sm text-gray-500">Cargando tareas...</p>
        ) : tasks.length === 0 ? (
          <p className="text-sm text-gray-500">No hay tareas aún.</p>
        ) : (
          <div className="flex flex-col gap-2">
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onUpdated={handleUpdated}
                onDeleted={handleDeleted}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
