import { taskRepositorie } from "../repositories/taskRepositorie";
import { conflictError, notFoundError, unauthorizedError } from "../errors/errors"
import { verifyUserBoard } from "./helpers"
import { boardRepositorie } from "../repositories/boardRepositorie";

const createTask = async (user_id: number, board_id: number, name: string) => {
    if(await verifyUserBoard(user_id, board_id)){
        throw unauthorizedError();
    }

    await taskRepositorie.createTask(user_id, board_id, name);

    return;
}

const getTasks = async (user_id: number, board_id: number) => {
    if(await verifyUserBoard(user_id, board_id)){
        throw unauthorizedError();
    }
    const tasks = await taskRepositorie.findTasks(board_id);
    return tasks;
}

const joinTask = async (user_id: number, task_id: number) => {

    const verifyUserTask = await taskRepositorie.getUserTask(user_id, task_id);

    if(verifyUserTask) {
        throw conflictError('Usuário ja está ativo na atividade');
    }

    const task = await taskRepositorie.findTask(task_id);

    if(!task) {
        throw notFoundError();
    }

    if(await verifyUserBoard(user_id, task.board_id)){
        throw unauthorizedError();
    }

    await taskRepositorie.joinTask(user_id, task_id);
    return;
}

const deleteTask =async (user_id: number, task_id: number) => {

    const task = await taskRepositorie.findTask(task_id);

    if(!task) {
        throw notFoundError();
    }

    if(await verifyUserBoard(user_id, task.board_id)){
        throw unauthorizedError();
    }

    const board = await boardRepositorie.getBoardById(task.board_id);

    if(task.creator !== user_id && board.owner !== user_id) {
        throw unauthorizedError();
    }

    await taskRepositorie.deleteTask(task_id);
    return;
}

export const taskService = {
    createTask,
    getTasks,
    joinTask,
    deleteTask
}