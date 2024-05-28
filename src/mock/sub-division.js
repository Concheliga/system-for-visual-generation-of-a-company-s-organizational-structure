import { SUBDIVISIONS} from "../const";
import { createIdGenerator, getRandomNumber } from "../utils";

const subDivisionId = createIdGenerator();

function getSubDivision(){
    let locationsIds = [];
    for (let i = 1; i <= 11; i++){locationsIds.push(i)}
    let subdivisions = [{
        id: subDivisionId(),
        name: 'Все подразделения',
        locationsId: locationsIds
    }]
    for (let i = 0; i < SUBDIVISIONS.length; i++){
        let randomLocationsIds = [1]
        for (let i = 2; i <= 11; i++) {if (getRandomNumber(0, 1)) {randomLocationsIds.push(i)}}
        subdivisions.push({
            id: subDivisionId(),
            name: SUBDIVISIONS[i],
            locationsId: randomLocationsIds
        })
    }
    return subdivisions
}

export {getSubDivision};
