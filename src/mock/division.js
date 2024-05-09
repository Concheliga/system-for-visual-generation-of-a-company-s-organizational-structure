import { DIVISIONS } from "../const";
import { createIdGenerator, getRandomArrayElement, getRandomNumber } from "../utils";

const divisionId = createIdGenerator();

function getDivision(){
    return{
        id: divisionId(),
        name: getRandomArrayElement(DIVISIONS),
        locationId: getRandomNumber(1, 16),
        subDivisionId: getRandomNumber(1, 16)
    }
}

export {getDivision};
