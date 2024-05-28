import { DIVISIONS } from "../const";
import { createIdGenerator, getRandomNumber } from "../utils";

const divisionId = createIdGenerator();

function getDivision(){
    let locationsIds = [];
    for (let i = 1; i <= 11; i++){locationsIds.push(i)}
    let subDivisionsIds = [];
    for (let i = 1; i <= 18; i++){subDivisionsIds.push(i)}
    let divisions = [{
        id: divisionId(),
        name: 'Все отделы',
        locationsId: locationsIds,
        subDivisionsId: subDivisionsIds
    }]
    for (let i = 0; i < DIVISIONS.length; i++){
        let randomLocationsIds = [1]
        for (let i = 2; i <= 11; i++) {if (getRandomNumber(0, 1)) {randomLocationsIds.push(i)}}
        let randomSubDivisionsIds = [1]
        for (let i = 2; i <= 18; i++) {if (getRandomNumber(0, 1)) {randomSubDivisionsIds.push(i)}}
        divisions.push({
            id: divisionId(),
            name: DIVISIONS[i],
            locationsId: randomLocationsIds,
            subDivisionsId: randomSubDivisionsIds
        })
    }
    return divisions
}

export {getDivision};
