import prisma from "../database/prismaDb"

const create = (user_id: number, board_id: number, message: string) => {
    return prisma.messages.create({
        data: {
            user_id,
            board_id,
            message
        }
    })
}

const findMany = (board_id: number) => {
    return prisma.messages.findMany({
        where: {
            board_id,
        },
        include: {
            Users: {
                select: {
                    username: true,
                    UsersInfo: true
                },
            }
        },
    })
}

export const messagesRepositorie = {
    create,
    findMany
}