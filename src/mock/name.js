import { createIdGenerator, getRandomNumber, getRandomArrayElement } from "../utils";
import {KIND_OF_WORK, POSTS} from "../const";

const nameId = createIdGenerator();

function getName(){
    let locationsIds = [];
    for (let i = 1; i <= 11; i++){locationsIds.push(i)}
    let subDivisionsIds = [];
    for (let i = 1; i <= 18; i++){subDivisionsIds.push(i)}
    let divisionsIds = [];
    for (let i = 1; i <= 53; i++){divisionsIds.push(i)}
    let groupsIds = [];
    for (let i = 1; i <= 107; i++){groupsIds.push(i)}
    let names = []
    for (let i = 0; i <= 1500; i++){
        let randomLocationsIds = [1, getRandomNumber(2, 11)]
        let randomSubDivisionsIds = [1, getRandomNumber(2, 18)]
        let randomDivisionsIds = [1, getRandomNumber(2, 53)]
        let randomGroupsIds = [1, getRandomNumber(2, 107)]
        names.push({
            id: nameId(),
            name: 'Сотрудник брусники ' + String(i),
            locationsId: randomLocationsIds,
            subDivisionsId: randomSubDivisionsIds,
            divisionsId: randomDivisionsIds,
            groupsId: randomGroupsIds,
            postName: getRandomArrayElement(POSTS),
            workTypeName: getRandomArrayElement(KIND_OF_WORK)
        })
    }
    return names
}

export {getName};