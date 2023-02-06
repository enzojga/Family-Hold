import redisClient from "../database/redisDb";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import * as jwt from "jsonwebtoken";

export async function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const authHeader = req.header("Authorization");
  if (!authHeader) return res.sendStatus(httpStatus.FORBIDDEN);
  const token = authHeader.split(" ")[1];
  if (!token) return res.sendStatus(httpStatus.FORBIDDEN);
  try {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET) as JWTPayload;
    const session = await redisClient.get(token);

    if (!session) return res.sendStatus(httpStatus.FORBIDDEN);

    req.userId = userId;
    return next();
  } catch (err) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
  }
}

export type AuthenticatedRequest = Request & JWTPayload;

type JWTPayload = {
  userId: number;
};