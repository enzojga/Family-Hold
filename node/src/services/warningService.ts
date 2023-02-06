import { notFoundError, unauthorizedError } from "../errors/errors";
import { boardRepositorie } from "../repositories/boardRepositorie";
import { warningRepositorie } from "../repositories/warningRepository";
import { verifyUserBoard } from "./helpers";

const create = async (user_id: number, board_id: number, text: string) => {
    const verifyBoard = await boardRepositorie.getBoardById(board_id);

    if(!verifyBoard) {
        throw notFoundError();
    }

    if(await verifyUserBoard(user_id, board_id)) {
        throw unauthorizedError();
    }

    if(!user_id) {
        throw unauthorizedError();
    }

    const warning = await warningRepositorie.create(user_id, board_id, text);
    return warning;
}

const getWarnings = async (board_id: number, user_id: number) => {
    if(await verifyUserBoard(user_id, board_id)) {
        throw unauthorizedError();
    }
    const warnings = await warningRepositorie.getManyByBoardId(board_id);
    return warnings;
}

export const warningService = {
    create,
    getWarnings
}