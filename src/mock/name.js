import { SUBDIVISIONS, LOCATIONS, DIVISIONS, GROUPS, POSTS } from "../const";
import { createIdGenerator, getRandomArrayElement, getRandomNumber } from "../utils";

const nameId = createIdGenerator();

function getName(){
    return{
        id: nameId(),
        name: "Сотрудник брусники " + getRandomNumber(1, 1500).toString(),
        location: getRandomArrayElement(LOCATIONS),
        subDivision: getRandomArrayElement(SUBDIVISIONS),
        division: getRandomArrayElement(DIVISIONS),
        group: getRandomArrayElement(GROUPS),
        post: getRandomArrayElement(POSTS)
    }
}

export {getName};