"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepositorie = void 0;
const redisDb_1 = __importDefault(require("../database/redisDb"));
const prismaDb_1 = __importDefault(require("../database/prismaDb"));
const jwt = __importStar(require("jsonwebtoken"));
const createUser = (username, password) => {
    return prismaDb_1.default.users.create({
        data: {
            username,
            password
        },
    });
};
const findUserByUsername = (username) => {
    return prismaDb_1.default.users.findFirst({
        where: {
            username,
        },
    });
};
const setToken = (userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET);
    redisDb_1.default.set(token, 1);
    return token;
};
const getToken = (key) => {
    const token = redisDb_1.default.get(key);
    return token;
};
exports.userRepositorie = {
    createUser,
    findUserByUsername,
    setToken
};
