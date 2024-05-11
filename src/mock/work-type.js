import { KIND_OF_WORK } from "../const";
import { createIdGenerator, getRandomArrayElement, getRandomNumber } from "../utils";

const workTypeId = createIdGenerator();

function getWorkType(){
    return{
        id: workTypeId(),
        name: getRandomArrayElement(KIND_OF_WORK),
        locationId: getRandomNumber(1, 10),
        subDivisionId: getRandomNumber(1, 20),
        divisionId: getRandomNumber(1, 40),
        groupId: getRandomNumber(1, 60),
        postId: getRandomNumber(1, 60)
    }
}

export {getWorkType};