import { GROUPS } from "../const";
import { createIdGenerator, getRandomArrayElement } from "../utils";

const groupId = createIdGenerator();

function getGroup(location, subDivision, division){
    return{
        id: groupId(),
        name: getRandomArrayElement(GROUPS),
        location: location,
        subDivision: subDivision,
        division: division
    }
}

export {getGroup};