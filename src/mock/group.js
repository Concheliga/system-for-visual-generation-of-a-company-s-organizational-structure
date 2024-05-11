import { GROUPS } from "../const";
import { createIdGenerator, getRandomArrayElement, getRandomNumber } from "../utils";

const groupId = createIdGenerator();

function getGroup(){
    return{
        id: groupId(),
        name: getRandomArrayElement(GROUPS),
        locationId: getRandomNumber(1, 10),
        subDivisionId: getRandomNumber(1, 20),
        divisionId: getRandomNumber(1, 40)
    }
}

export {getGroup};