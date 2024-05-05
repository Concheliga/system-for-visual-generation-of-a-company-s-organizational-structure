import { SUBDIVISIONS, LOCATIONS, DIVISIONS, GROUPS, POSTS } from "../const";
import { createIdGenerator, getRandomArrayElement } from "../utils";

const postId = createIdGenerator();

function getPost(){
    return{
        id: postId(),
        name: getRandomArrayElement(POSTS),
        location: getRandomArrayElement(LOCATIONS),
        subDivision: getRandomArrayElement(SUBDIVISIONS),
        division: getRandomArrayElement(DIVISIONS),
        group: getRandomArrayElement(GROUPS)
    }
}

export {getPost};