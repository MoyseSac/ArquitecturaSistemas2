import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export const getAllTasks = async (
    _req: Request,
    res: Response
): Promise<void> => {
    const tasks = await prisma.task.findMany({
        orderBy: { createdAt: "desc" },
    });
    res.json(tasks);
};

export const createTask = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { title, description } = req.body;
    if (!title) {
        res.status(400).json({ error: "title is required" });
        return;
    }
    const task = await prisma.task.create({
        data: { title, description },
    });
    res.status(201).json(task);
};

export const updateTask = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const task = await prisma.task.update({
        where: { id: Number(id) },
        data: { title, description, completed },
    });
    res.json(task);
};

export const deleteTask = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { id } = req.params;
    await prisma.task.delete({ where: { id: Number(id) } });
    res.status(204).send();
};