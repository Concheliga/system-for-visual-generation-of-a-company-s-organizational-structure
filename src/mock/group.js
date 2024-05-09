import { GROUPS } from "../const";
import { createIdGenerator, getRandomArrayElement, getRandomNumber } from "../utils";

const groupId = createIdGenerator();

function getGroup(){
    return{
        id: groupId(),
        name: getRandomArrayElement(GROUPS),
        locationId: getRandomNumber(1, 16),
        subDivisionId: getRandomNumber(1, 16),
        divisionId: getRandomNumber(1, 16)
    }
}

export {getGroup};