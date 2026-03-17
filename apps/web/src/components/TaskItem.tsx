import type { Task } from "../api";
import { updateTask, deleteTask } from "../api";

interface Props {
  task: Task;
  onUpdated: (task: Task) => void;
  onDeleted: (id: number) => void;
}

export default function TaskItem({ task, onUpdated, onDeleted }: Props) {
  const handleToggle = async () => {
    const updated = await updateTask(task.id, {
      completed: !task.completed,
    });
    onUpdated(updated);
  };

  const handleDelete = async () => {
    await deleteTask(task.id);
    onDeleted(task.id);
  };

  return (
    <div className="flex items-start justify-between border rounded px-4 py-3 gap-4">
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggle}
          className="mt-1 cursor-pointer"
        />
        <div>
          <p
            className={`text-sm font-medium ${
              task.completed ? "line-through text-gray-400" : "text-gray-800"
            }`}
          >
            {task.title}
          </p>
          {task.description && (
            <p className="text-xs text-gray-500 mt-0.5">{task.description}</p>
          )}
        </div>
      </div>
      <button
        onClick={handleDelete}
        className="text-red-400 hover:text-red-600 text-xs"
      >
        Eliminar
      </button>
    </div>
  );
}
