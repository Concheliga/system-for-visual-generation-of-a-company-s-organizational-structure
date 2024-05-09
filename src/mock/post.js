import { POSTS } from "../const";
import { createIdGenerator, getRandomArrayElement } from "../utils";

const postId = createIdGenerator();

function getPost(location, subDivision, division, group){
    return{
        id: postId(),
        name: getRandomArrayElement(POSTS),
        location: location,
        subDivision: subDivision,
        division: division,
        group: group
    }
}

export {getPost};