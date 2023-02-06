import redisClient from "../database/redisDb";
import prisma from "../database/prismaDb"
import * as jwt from "jsonwebtoken";

const createUser = (username: string, password: string) => {
    return prisma.users.create({
        data: {
            username,
            password
        },
    });
};

const findUserByUsername = (username: string) => {
    return prisma.users.findFirst({
        where: {
            username,
        },
    });
};

const setToken = (userId: number) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET);

    redisClient.set(token, 1);

    return token;
}

const getToken = (key: string) => {
    const token = redisClient.get(key);
    return token;
}

export const userRepositorie = {
    createUser,
    findUserByUsername,
    setToken
};

