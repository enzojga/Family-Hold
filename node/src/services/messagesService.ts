import { unauthorizedError } from "../errors/errors"
import { messagesRepositorie } from "../repositories/messagesRepositorie";
import { verifyUserBoard } from "./helpers"

const sendMessage = async (user_id: number, board_id: number, message: string) => {
    if(await verifyUserBoard(user_id, board_id)){
        throw unauthorizedError();
    }

    await messagesRepositorie.create(user_id, board_id, message);
    return;
}

const getMessages =async (user_id: number, board_id: number) => {
    if(await verifyUserBoard(user_id, board_id)){
        throw unauthorizedError();
    }
    const messages = await messagesRepositorie.findMany(board_id);
    return messages;
}

export const messagesService = {
    sendMessage,
    getMessages
}