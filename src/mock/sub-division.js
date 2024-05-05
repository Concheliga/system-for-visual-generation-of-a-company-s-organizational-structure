import { SUBDIVISIONS, LOCATIONS } from "../const";
import { createIdGenerator, getRandomArrayElement } from "../utils";

const subDivisionId = createIdGenerator();

function getSubDivision(){
    return{
        id: subDivisionId(),
        name: getRandomArrayElement(SUBDIVISIONS),
        location: getRandomArrayElement(LOCATIONS)
    }
}

export {getSubDivision};
