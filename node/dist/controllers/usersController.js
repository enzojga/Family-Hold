"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIn = exports.signUp = void 0;
const userService_1 = require("../services/userService");
const http_status_1 = __importDefault(require("http-status"));
const signUp = async (req, res) => {
    const { username, password } = req.body;
    try {
        await userService_1.userService.createUser(username, password);
        return res.sendStatus(http_status_1.default.OK);
    }
    catch (err) {
        console.log(err);
        return res.sendStatus(http_status_1.default.CONFLICT);
    }
};
exports.signUp = signUp;
const signIn = async (req, res) => {
    const { username, password } = req.body;
    try {
        const token = await userService_1.userService.autenticateUser(username, password);
        return res.status(http_status_1.default.OK).send({ username, token });
    }
    catch (err) {
        console.log(err);
        return res.sendStatus(http_status_1.default.UNAUTHORIZED);
    }
};
exports.signIn = signIn;
