import { SUBDIVISIONS} from "../const";
import { createIdGenerator, getRandomArrayElement } from "../utils";

const subDivisionId = createIdGenerator();

function getSubDivision(location){
    return{
        id: subDivisionId(),
        name: getRandomArrayElement(SUBDIVISIONS),
        location: location
    }
}

export {getSubDivision};
