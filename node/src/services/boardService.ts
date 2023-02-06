import { number, string } from "joi";
import { conflictError, notFoundError, unauthorizedError } from "../errors/errors";
import { boardRepositorie } from "../repositories/boardRepositorie";

const create = async (userId: number, name: string, icon: number, invite: string) => {
    const verifyInvite = await boardRepositorie.getBoardByInvite(invite);
    if(verifyInvite) {
        throw conflictError('Convite já cadastrado');
    }
    const board = await boardRepositorie.create(userId, name, icon, invite);
    await boardRepositorie.joinBoard(userId, board.id);
    return board;
}

const getBoardsByUserId = async (userId: number) => {
    const boards = await boardRepositorie.getBoardsByUserId(userId);
    return boards;
}

const quiBoard = async (user_id: number, board_id: number) => {
    const board = await boardRepositorie.getBoardById(board_id);

    if(!board) {
        throw notFoundError();
    }

    if(board.owner === user_id) {
        throw unauthorizedError();
    }

    await boardRepositorie.quitBoard(user_id, board_id);
    return;
}

const joinBoard = async (user_id: number, invite: string) => {
    const board = await boardRepositorie.getBoardByInvite(invite);

    if(!board) {
        throw notFoundError;
    }

    const verifyuserBoard =  await boardRepositorie.getUserBoard(user_id, board.id);

    if(verifyuserBoard) {
        throw conflictError('Usuário já esta no quadro');
    }

    const userBoard = await boardRepositorie.joinBoard(user_id, board.id);
    return userBoard;
}

export const boardService = {
    create,
    getBoardsByUserId,
    quiBoard,
    joinBoard
}