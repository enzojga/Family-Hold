import { AuthenticatedRequest } from "../middlewares/autenticationMiddleware";
import { Response } from "express";
import httpStatus from "http-status";
import { boardService } from "../services/boardService";

export const createBoard = async (req: AuthenticatedRequest, res: Response) => {
    const { name, icon, invite } = req.body;
    try {
        const board = await boardService.create(req.userId, name, icon, invite);
        return res.status(httpStatus.CREATED).send(board);
    } catch (err) {
        console.log(err);
        if(err.name === "ConflictError") {
            return res.sendStatus(httpStatus.CONFLICT);
        }
        return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
}

export const getBoards = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const boards: any = await boardService.getBoardsByUserId(req.userId);
        return res.status(httpStatus.OK).send(boards);
    } catch (err) {
        console.log(err);
        return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
}

export const quitBoard = async (req: AuthenticatedRequest, res: Response) => {
    const boardId  = Number(req.params.boardId);
    try {
        await boardService.quiBoard(req.userId, boardId);
        return res.sendStatus(httpStatus.NO_CONTENT);
    } catch (err) {
        if(err.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
        }
        return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
}

export const joinBoard = async (req: AuthenticatedRequest, res: Response) => {
    const { invite } = req.body;
    try {
        const joinInfo = await boardService.joinBoard(req.userId, invite)
        return res.status(httpStatus.OK).send(joinInfo);
    } catch (err) {
        console.log(err);
        if(err.name === "ConflictError") {
            return res.sendStatus(httpStatus.CONFLICT);
        }
        res.sendStatus(httpStatus.NOT_FOUND);
    }
}