import { createClient } from "redis";

const redisClient = createClient({
    url: process.env.REDIS_URL
});

const redisConnect = async () => {
    try{
        redisClient.connect();
    } catch (err) {
        redisClient.on('error', (err) => console.log('Redis Client Error', err));
    }
}
redisConnect();

export default redisClient;
