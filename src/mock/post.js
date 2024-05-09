import { POSTS } from "../const";
import { createIdGenerator, getRandomArrayElement, getRandomNumber } from "../utils";

const postId = createIdGenerator();

function getPost(){
    return{
        id: postId(),
        name: getRandomArrayElement(POSTS),
        locationId: getRandomNumber(1, 50),
        subDivisionId: getRandomNumber(1, 50),
        divisionId: getRandomNumber(1, 50),
        groupId: getRandomNumber(1, 50)
    }
}

export {getPost};