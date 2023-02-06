import { conflictError, unauthorizedError } from "../errors/errors";
import { userRepositorie } from "../repositories/userRepositorie"
import bcrypt from "bcrypt";


const createUser = async (username: string, password: string) => {
    const user = await userRepositorie.findUserByUsername(username);

    if(user) {
        throw conflictError("User already exists!");
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    await userRepositorie.createUser(username, hashedPassword);
    return;
}

const autenticateUser = async (username: string, password: string) => {
    const user = await userRepositorie.findUserByUsername(username);

    if(!user) {
        throw unauthorizedError();
    }

    const samePassword = await bcrypt.compare(password, user.password);
    
    if(!samePassword) {
        throw unauthorizedError();
    }

    const token = userRepositorie.setToken(user.id);

    return token;
}

export const userService = {
    createUser,
    autenticateUser
}