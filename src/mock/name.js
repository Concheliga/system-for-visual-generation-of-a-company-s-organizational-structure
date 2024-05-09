import { createIdGenerator, getRandomNumber } from "../utils";

const nameId = createIdGenerator();

function getName(location, subDivision, division, group, post){
    return{
        id: nameId(),
        name: "Сотрудник брусники " + getRandomNumber(1, 1500).toString(),
        location: location,
        subDivision: subDivision,
        division: division,
        group: group,
        post: post
    }
}

export {getName};