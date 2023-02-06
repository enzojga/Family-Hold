"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskService = void 0;
const taskRepositorie_1 = require("../repositories/taskRepositorie");
const errors_1 = require("../errors/errors");
const helpers_1 = require("./helpers");
const boardRepositorie_1 = require("../repositories/boardRepositorie");
const createTask = async (user_id, board_id, name) => {
    if (await (0, helpers_1.verifyUserBoard)(user_id, board_id)) {
        throw (0, errors_1.unauthorizedError)();
    }
    await taskRepositorie_1.taskRepositorie.createTask(user_id, board_id, name);
    return;
};
const getTasks = async (user_id, board_id) => {
    if (await (0, helpers_1.verifyUserBoard)(user_id, board_id)) {
        throw (0, errors_1.unauthorizedError)();
    }
    const tasks = await taskRepositorie_1.taskRepositorie.findTasks(board_id);
    return tasks;
};
const joinTask = async (user_id, task_id) => {
    const verifyUserTask = await taskRepositorie_1.taskRepositorie.getUserTask(user_id, task_id);
    if (verifyUserTask) {
        throw (0, errors_1.conflictError)('Usuário ja está ativo na atividade');
    }
    const task = await taskRepositorie_1.taskRepositorie.findTask(task_id);
    if (!task) {
        throw (0, errors_1.notFoundError)();
    }
    if (await (0, helpers_1.verifyUserBoard)(user_id, task.board_id)) {
        throw (0, errors_1.unauthorizedError)();
    }
    await taskRepositorie_1.taskRepositorie.joinTask(user_id, task_id);
    return;
};
const deleteTask = async (user_id, task_id) => {
    const task = await taskRepositorie_1.taskRepositorie.findTask(task_id);
    if (!task) {
        throw (0, errors_1.notFoundError)();
    }
    if (await (0, helpers_1.verifyUserBoard)(user_id, task.board_id)) {
        throw (0, errors_1.unauthorizedError)();
    }
    const board = await boardRepositorie_1.boardRepositorie.getBoardById(task.board_id);
    if (task.creator !== user_id && board.owner !== user_id) {
        throw (0, errors_1.unauthorizedError)();
    }
    await taskRepositorie_1.taskRepositorie.deleteTask(task_id);
    return;
};
exports.taskService = {
    createTask,
    getTasks,
    joinTask,
    deleteTask
};
