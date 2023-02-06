"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const errors_1 = require("../errors/errors");
const userRepositorie_1 = require("../repositories/userRepositorie");
const bcrypt_1 = __importDefault(require("bcrypt"));
const createUser = async (username, password) => {
    const user = await userRepositorie_1.userRepositorie.findUserByUsername(username);
    if (user) {
        throw (0, errors_1.conflictError)("User already exists!");
    }
    const hashedPassword = await bcrypt_1.default.hash(password, 12);
    await userRepositorie_1.userRepositorie.createUser(username, hashedPassword);
    return;
};
const autenticateUser = async (username, password) => {
    const user = await userRepositorie_1.userRepositorie.findUserByUsername(username);
    if (!user) {
        throw (0, errors_1.unauthorizedError)();
    }
    const samePassword = await bcrypt_1.default.compare(password, user.password);
    if (!samePassword) {
        throw (0, errors_1.unauthorizedError)();
    }
    const token = userRepositorie_1.userRepositorie.setToken(user.id);
    return token;
};
exports.userService = {
    createUser,
    autenticateUser
};
