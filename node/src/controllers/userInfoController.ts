import { userInfoService } from "../services/userInfoService";
import { Response } from "express";
import httpStatus from "http-status";
import { AuthenticatedRequest } from "../middlewares/autenticationMiddleware";

export const upsertUserInfo = async (req: AuthenticatedRequest, res: Response) =>  {

    const { picture, nickname, status } = req.body;
    const boardId  = Number(req.params.boardId);
    try {
        await userInfoService.upsert(boardId, req.userId, picture, nickname, status);
        return res.sendStatus(httpStatus.OK);
    } catch (err) {
        return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
}

export const getUserInforFromBoardId = async (req: AuthenticatedRequest, res: Response) =>  {
    const boardId  = Number(req.params.boardId);
    try {
        const infos = await userInfoService.getManyUserInfo(req.userId, boardId);
        return res.status(httpStatus.OK).send(infos);
    } catch (err) {
        return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
}