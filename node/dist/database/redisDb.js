"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
const redisClient = (0, redis_1.createClient)({
    url: process.env.REDIS_URL
});
const redisConnect = async () => {
    try {
        redisClient.connect();
    }
    catch (err) {
        redisClient.on('error', (err) => console.log('Redis Client Error', err));
    }
};
redisConnect();
exports.default = redisClient;
