import { messagesService } from "../services/messagesService";
import { Response } from "express";
import httpStatus from "http-status";
import { AuthenticatedRequest } from "../middlewares/autenticationMiddleware";

export const sendMessage = async (req: AuthenticatedRequest, res: Response) =>  {

    const { message } = req.body;
    const boardId  = Number(req.params.boardId);
    try {
        await messagesService.sendMessage(req.userId, boardId, message);
        return res.sendStatus(httpStatus.CREATED);
    } catch (err) {
        return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
}

export const getMessages =async (req: AuthenticatedRequest, res: Response) => {
    const boardId  = Number(req.params.boardId);
    try {
        const messages = await messagesService.getMessages(req.userId, boardId);
        return res.status(httpStatus.OK).send(messages);
    } catch (err) {
        return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
}