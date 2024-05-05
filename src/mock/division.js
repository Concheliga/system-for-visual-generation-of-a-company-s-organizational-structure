import { SUBDIVISIONS, LOCATIONS, DIVISIONS } from "../const";
import { createIdGenerator, getRandomArrayElement } from "../utils";

const divisionId = createIdGenerator();

function getDivision(){
    return{
        id: divisionId(),
        name: getRandomArrayElement(DIVISIONS),
        location: getRandomArrayElement(LOCATIONS),
        subDivision: getRandomArrayElement(SUBDIVISIONS)
    }
}

export {getDivision};
