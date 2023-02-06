"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskRepositorie = void 0;
const prismaDb_1 = __importDefault(require("../database/prismaDb"));
const createTask = (user_id, board_id, name) => {
    return prismaDb_1.default.tasks.create({
        data: {
            creator: user_id,
            board_id,
            name
        }
    });
};
const findTasks = (board_id) => {
    return prismaDb_1.default.tasks.findMany({
        where: {
            board_id,
        },
        include: {
            TaskCategories: {
                select: {
                    Categories: true
                },
            },
            UserTask: {
                include: {
                    Users: {
                        select: {
                            UsersInfo: {
                                where: {
                                    board_id
                                }
                            },
                        }
                    }
                }
            },
        },
        orderBy: {
            id: 'desc',
        },
    });
};
const findTask = (task_id) => {
    return prismaDb_1.default.tasks.findFirst({
        where: {
            id: task_id,
        }
    });
};
const joinTask = (user_id, task_id) => {
    return prismaDb_1.default.userTask.create({
        data: {
            user_id,
            task_id
        }
    });
};
const getUserTask = (user_id, task_id) => {
    return prismaDb_1.default.userTask.findFirst({
        where: {
            user_id,
            task_id
        }
    });
};
const deleteTask = async (task_id) => {
    await prismaDb_1.default.userTask.deleteMany({
        where: {
            task_id,
        }
    });
    await prismaDb_1.default.tasks.delete({
        where: {
            id: task_id,
        }
    });
    return;
};
exports.taskRepositorie = {
    createTask,
    findTasks,
    findTask,
    joinTask,
    getUserTask,
    deleteTask
};
