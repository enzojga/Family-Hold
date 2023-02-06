import prisma from "../database/prismaDb"

const createTask = (user_id: number, board_id: number, name: string) => {
    return prisma.tasks.create({
        data: {
            creator: user_id,
            board_id,
            name
        }
    })
};

const findTasks = (board_id: number) => {
    return prisma.tasks.findMany({
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

const findTask = (task_id: number) => {
    return prisma.tasks.findFirst({
        where: {
            id: task_id,
        }
    })
}

const joinTask = (user_id:number, task_id: number) => {
    return prisma.userTask.create({
        data: {
            user_id,
            task_id
        }
    })
}

const getUserTask = (user_id:number, task_id: number) => {
    return prisma.userTask.findFirst({
        where: {
            user_id,
            task_id
        }
    })
}

const deleteTask = async (task_id: number) => {
    await prisma.userTask.deleteMany({
        where: {
            task_id,
        }
    });
    await prisma.tasks.delete({
        where: {
            id: task_id,
        }
    });
    return;
}

export const taskRepositorie = {
    createTask,
    findTasks,
    findTask,
    joinTask,
    getUserTask,
    deleteTask
}