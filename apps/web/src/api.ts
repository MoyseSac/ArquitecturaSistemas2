const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export interface Task {
    id: string;
    title: string;
    description: string | null;
    completed: boolean;
    createdAt: string;
    updatedAt: string;
}

export const getTasks = async (): Promise<Task[]> => {
    const res = await fetch(`${API_URL}/api/tasks`);
    return res.json();
};

export const createTask = async (data: {
    title: string;
    description?: string;
}): Promise<Task> => {
    const res = await fetch(`${API_URL}/api/tasks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return res.json();
};

export const updateTask = async (
    id: string,
    data: Partial<Task>
): Promise<Task> => {
    const res = await fetch(`${API_URL}/api/tasks/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return res.json();
};

export const deleteTask = async (id: string): Promise<void> => {
    await fetch(`${API_URL}/api/tasks/${id}`, { method: "DELETE" });
};