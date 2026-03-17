import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export const getAllTasks = async (
    _req: Request,
    res: Response
): Promise<void> => {
    const tasks = await prisma.task.findMany({
        where: { deletedAt: null },
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
    const id = String(req.params.id);
    const { title, description, completed } = req.body;
    const task = await prisma.task.update({
        where: { id },
        data: { title, description, completed },
    });
    res.json(task);
};

export const deleteTask = async (
    req: Request,
    res: Response
): Promise<void> => {
    const id = String(req.params.id);
    await prisma.task.update({
        where: { id },
        data: { deletedAt: new Date() },
    });
    res.status(204).send();
};