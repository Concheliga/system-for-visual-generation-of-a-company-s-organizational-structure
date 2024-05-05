import { SUBDIVISIONS, LOCATIONS, DIVISIONS, GROUPS } from "../const";
import { createIdGenerator, getRandomArrayElement } from "../utils";

const groupId = createIdGenerator();

function getGroup(){
    return{
        id: groupId(),
        name: getRandomArrayElement(GROUPS),
        location: getRandomArrayElement(LOCATIONS),
        subDivision: getRandomArrayElement(SUBDIVISIONS),
        division: getRandomArrayElement(DIVISIONS)
    }
}

export {getGroup};