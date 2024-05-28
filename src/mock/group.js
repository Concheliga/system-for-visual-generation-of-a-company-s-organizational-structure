import { GROUPS } from "../const";
import { createIdGenerator, getRandomNumber } from "../utils";

const groupId = createIdGenerator();

function getGroup(){
    let locationsIds = [];
    for (let i = 1; i <= 11; i++){locationsIds.push(i)}
    let subDivisionsIds = [];
    for (let i = 1; i <= 18; i++){subDivisionsIds.push(i)}
    let divisionsIds = [];
    for (let i = 1; i <= 53; i++){divisionsIds.push(i)}
    let groups = [{
        id: groupId(),
        name: 'Все группы',
        locationsId: locationsIds,
        subDivisionsId: subDivisionsIds,
        divisionsId: divisionsIds
    }]
    for (let i = 0; i < GROUPS.length; i++){
        let randomLocationsIds = [1]
        for (let i = 2; i <= 11; i++) {if (getRandomNumber(0, 1)) {randomLocationsIds.push(i)}}
        let randomSubDivisionsIds = [1]
        for (let i = 2; i <= 18; i++) {if (getRandomNumber(0, 1)) {randomSubDivisionsIds.push(i)}}
        let randomDivisionsIds = [1]
        for (let i = 2; i <= 53; i++) {if (getRandomNumber(0, 1)) {randomDivisionsIds.push(i)}}
        groups.push({
            id: groupId(),
            name: GROUPS[i],
            locationsId: randomLocationsIds,
            subDivisionsId: randomSubDivisionsIds,
            divisionsId: randomDivisionsIds
        })
    }
    return groups
}

export {getGroup};