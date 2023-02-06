"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.joinTask = exports.getBoardTasks = exports.createTask = void 0;
const http_status_1 = __importDefault(require("http-status"));
const taskService_1 = require("../services/taskService");
const createTask = async (req, res) => {
    const { name } = req.body;
    const boardId = Number(req.params.boardId);
    try {
        await taskService_1.taskService.createTask(req.userId, boardId, name);
        return res.sendStatus(http_status_1.default.CREATED);
    }
    catch (err) {
        return res.sendStatus(http_status_1.default.UNAUTHORIZED);
    }
};
exports.createTask = createTask;
const getBoardTasks = async (req, res) => {
    const boardId = Number(req.params.boardId);
    try {
        const tasks = await taskService_1.taskService.getTasks(req.userId, boardId);
        return res.status(http_status_1.default.OK).send(tasks);
    }
    catch (err) {
        return res.sendStatus(http_status_1.default.UNAUTHORIZED);
    }
};
exports.getBoardTasks = getBoardTasks;
const joinTask = async (req, res) => {
    const taskId = Number(req.params.taskId);
    try {
        const tasks = await taskService_1.taskService.joinTask(req.userId, taskId);
        return res.status(http_status_1.default.OK).send(tasks);
    }
    catch (err) {
        if (err.name === "ConflictError") {
            return res.sendStatus(http_status_1.default.CONFLICT);
        }
        if (err.name === "NotFoundError") {
            return res.sendStatus(http_status_1.default.NOT_FOUND);
        }
        return res.sendStatus(http_status_1.default.UNAUTHORIZED);
    }
};
exports.joinTask = joinTask;
const deleteTask = async (req, res) => {
    const taskId = Number(req.params.taskId);
    try {
        await taskService_1.taskService.deleteTask(req.userId, taskId);
        return res.sendStatus(http_status_1.default.NO_CONTENT);
    }
    catch (err) {
        if (err.name === "NotFoundError") {
            return res.sendStatus(http_status_1.default.NOT_FOUND);
        }
        return res.sendStatus(http_status_1.default.UNAUTHORIZED);
    }
};
exports.deleteTask = deleteTask;
