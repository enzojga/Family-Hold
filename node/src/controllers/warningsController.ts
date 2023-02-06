import { warningService } from "../services/warningService";
import { Response } from "express";
import httpStatus from "http-status";
import { AuthenticatedRequest } from "../middlewares/autenticationMiddleware";

export const createWarning = async (req: AuthenticatedRequest, res: Response) =>  {

    const {text} = req.body;
    const boardId  = Number(req.params.boardId);
    try {
        await warningService.create(req.userId, boardId, text);
        return res.sendStatus(httpStatus.CREATED);
    } catch (err) {
        if(err.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
        }
        if(err.name === "UnauthorizedError") {
            return res.sendStatus(httpStatus.UNAUTHORIZED);
        }
        return res.sendStatus(httpStatus.FORBIDDEN);
    }
}

export const getBoardWarnings = async (req: AuthenticatedRequest, res: Response) => {
    const boardId  = Number(req.params.boardId);
    try {
        const warnings = await warningService.getWarnings(boardId, req.userId);
        return res.status(httpStatus.OK).send(warnings);
    } catch (err) {
        return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
}