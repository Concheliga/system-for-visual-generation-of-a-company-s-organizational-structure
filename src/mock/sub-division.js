import { SUBDIVISIONS} from "../const";
import { createIdGenerator, getRandomArrayElement, getRandomNumber } from "../utils";

const subDivisionId = createIdGenerator();

function getSubDivision(){
    return{
        id: subDivisionId(),
        name: getRandomArrayElement(SUBDIVISIONS),
        locationId: getRandomNumber(1, 10)
    }
}

export {getSubDivision};
