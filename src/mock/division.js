import { DIVISIONS } from "../const";
import { createIdGenerator, getRandomArrayElement } from "../utils";

const divisionId = createIdGenerator();

function getDivision(location, subDivision){
    return{
        id: divisionId(),
        name: getRandomArrayElement(DIVISIONS),
        location: location,
        subDivision: subDivision
    }
}

export {getDivision};
