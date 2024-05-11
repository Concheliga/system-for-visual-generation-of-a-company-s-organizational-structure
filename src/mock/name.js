import { createIdGenerator, getRandomNumber } from "../utils";

const nameId = createIdGenerator();

function getName(){
    return{
        id: nameId(),
        name: "Сотрудник брусники " + getRandomNumber(1, 1500).toString(),
        locationId: getRandomNumber(1, 10),
        subDivisionId: getRandomNumber(1, 20),
        divisionId: getRandomNumber(1, 40),
        groupId: getRandomNumber(1, 60),
        postId: getRandomNumber(1, 60),
        workTypeId: getRandomNumber(1, 4)
    }
}

export {getName};