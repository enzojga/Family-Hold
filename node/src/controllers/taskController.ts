import { AuthenticatedRequest } from "../middlewares/autenticationMiddleware";
import { Response } from "express";
import httpStatus from "http-status";
import { taskService } from "../services/taskService";

export const createTask = async (req: AuthenticatedRequest, res: Response) => {
    const { name } = req.body;
    const boardId  = Number(req.params.boardId);
    try {
        await taskService.createTask(req.userId, boardId, name);
        return res.sendStatus(httpStatus.CREATED);
    } catch (err) {
        return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
}

export const getBoardTasks = async (req: AuthenticatedRequest, res: Response) => {
    const boardId  = Number(req.params.boardId);
    try {
        const tasks = await taskService.getTasks(req.userId, boardId);
        return res.status(httpStatus.OK).send(tasks);
    } catch (err) {
        return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
}

export const joinTask = async (req: AuthenticatedRequest, res: Response) => {
    const taskId  = Number(req.params.taskId);
    try {
        const tasks = await taskService.joinTask(req.userId, taskId);
        return res.status(httpStatus.OK).send(tasks);
    } catch (err) {
        if(err.name === "ConflictError") {
            return res.sendStatus(httpStatus.CONFLICT);
        }
        if(err.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
        }
        return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
}

export const deleteTask = async (req: AuthenticatedRequest, res: Response) => {
    const taskId  = Number(req.params.taskId);
    try {
        await taskService.deleteTask(req.userId, taskId)
        return res.sendStatus(httpStatus.NO_CONTENT);
    } catch (err) {
        if(err.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
        }
        return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
}