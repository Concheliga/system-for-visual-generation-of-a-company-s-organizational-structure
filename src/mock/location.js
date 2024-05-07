import { LOCATIONS } from "../const";
import { createIdGenerator, getRandomArrayElement } from "../utils";

const locationId = createIdGenerator();

function getLocation(){
    return {
        id: locationId(),
        name: getRandomArrayElement(LOCATIONS)
    };
}

export {getLocation};