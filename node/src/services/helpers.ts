import { boardRepositorie } from "../repositories/boardRepositorie";

export const verifyUserBoard = async (user_id: number, board_id: number) => {
    const verifyUser = await boardRepositorie.getUserBoard(user_id, board_id);
    if(!verifyUser){
        return true;
    }
    return false;
}