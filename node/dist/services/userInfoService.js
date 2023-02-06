"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userInfoService = void 0;
const userInfoRepositorie_1 = require("../repositories/userInfoRepositorie");
const errors_1 = require("../errors/errors");
const helpers_1 = require("./helpers");
const upsert = async (board_id, user_id, picture, nickname, status) => {
    if (await (0, helpers_1.verifyUserBoard)(user_id, board_id)) {
        throw (0, errors_1.unauthorizedError)();
    }
    ;
    const userInfo = await userInfoRepositorie_1.userInfoRepositorie.getUserInfo(board_id, user_id);
    const upsertInfo = userInfoRepositorie_1.userInfoRepositorie.upsert(board_id, user_id, picture, nickname, status, userInfo?.id);
    return upsertInfo;
};
const getManyUserInfo = async (user_id, board_id) => {
    if (await (0, helpers_1.verifyUserBoard)(user_id, board_id)) {
        throw (0, errors_1.unauthorizedError)();
    }
    ;
    const infos = await userInfoRepositorie_1.userInfoRepositorie.getManyUserInfo(board_id);
    return infos;
};
exports.userInfoService = {
    upsert,
    getManyUserInfo
};
