import prisma from "../database/prismaDb"

const create = (creator: number, board_id: number, text: string) => {
    return prisma.warnings.create({
        data: {
            creator,
            board_id,
            text
        }
    });
};

const getManyByBoardId = (board_id: number) => {
    return prisma.warnings.findMany({
        where: {
            board_id
        },
        include: {
            Boards: {
                select: {
                    UsersInfo: true,
                }
            },
            Users: {
                select: {
                    username: true,
                }
            },
        },
        orderBy: {
            id: 'desc',
        }   
    });
}

export const warningRepositorie = {
    create,
    getManyByBoardId,
}