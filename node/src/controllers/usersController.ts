import { userService } from "../services/userService";
import { Request, Response } from "express";
import httpStatus from "http-status";


export const signUp = async (req: Request, res: Response) => {
    const {username, password} = req.body;
    try {
        await userService.createUser(username, password);
        return res.sendStatus(httpStatus.OK);
    } catch (err) {
        console.log(err);
        return res.sendStatus(httpStatus.CONFLICT);
    }
}

export const signIn = async (req: Request, res: Response) => {
    const {username, password} = req.body;
    try {
        const token = await userService.autenticateUser(username, password);
        return res.status(httpStatus.OK).send({username, token});
    } catch (err) {
        console.log(err);
        return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
}