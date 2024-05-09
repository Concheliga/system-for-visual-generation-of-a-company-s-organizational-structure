import { createIdGenerator, getRandomNumber } from "../utils";

const nameId = createIdGenerator();

function getName(){
    return{
        id: nameId(),
        name: "Сотрудник брусники " + getRandomNumber(1, 1500).toString(),
        locationId: getRandomNumber(1, 16),
        subDivisionId: getRandomNumber(1, 16),
        divisionId: getRandomNumber(1, 16),
        groupId: getRandomNumber(1, 16),
        postId: getRandomNumber(1, 16)
    }
}

export {getName};