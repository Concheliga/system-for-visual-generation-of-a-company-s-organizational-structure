import { POSTS } from "../const";
import { createIdGenerator, getRandomArrayElement, getRandomNumber } from "../utils";

const postId = createIdGenerator();

function getPost(){
    return{
        id: postId(),
        name: getRandomArrayElement(POSTS),
        locationId: getRandomNumber(1, 10),
        subDivisionId: getRandomNumber(1, 20),
        divisionId: getRandomNumber(1, 40),
        groupId: getRandomNumber(1, 60)
    }
}

export {getPost};