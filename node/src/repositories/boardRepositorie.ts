import prisma from "../database/prismaDb"

const create = (userId: number, name: string, icon: number, invite: string) => {
    return prisma.boards.create({
        data: {
            owner: userId,
            name,
            icon,
            invite
        },
    });
};

const joinBoard = (user_id: number, board_id: number) => {
    return prisma.userBoard.create({
        data: {
            user_id,
            board_id
        }
    })
}

const getUserBoard = (user_id: number, board_id: number) => {
    return prisma.userBoard.findFirst({
        where: {
            user_id,
            board_id
        }
    })
}

const getBoardById = (board_id: number) => {
    return prisma.boards.findFirst({
        where: {
            id: board_id,
        }
    })
}

const getBoardsByUserId = (user_id: number) => {
    return prisma.userBoard.findMany({
        where: {
            user_id,
        },
        select: {
            Boards: true
        }
    })
};

const getBoardByInvite = (invite: string) => {
    return prisma.boards.findFirst({
        where: {
            invite,
        }
    })
};

const quitBoard = (user_id: number, board_id: number) => {
    return prisma.userBoard.deleteMany({
        where: {
            user_id,
            board_id
        }
    })
}



export const boardRepositorie = {
    create,
    joinBoard,
    getUserBoard,
    getBoardById,
    getBoardsByUserId,
    getBoardByInvite,
    quitBoard
}