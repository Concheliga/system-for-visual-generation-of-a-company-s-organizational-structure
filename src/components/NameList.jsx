import Button from "./Button";

export default function NameList({nameModel, locationId, subDivisionId, divisionId, groupId, currentPostName, currentWorkTypeName }) {
    let names = nameModel.names
    let nameList = names
    .filter((name)=>(name.locationsId.includes(locationId) || locationId === null)
    && (name.subDivisionsId.includes(subDivisionId) || subDivisionId === null) && (name.divisionsId.includes(divisionId) || divisionId === null)
    && (name.groupsId.includes(groupId) || groupId === null) && (name.postName === currentPostName || currentPostName === null)
    && (name.workTypeName === currentWorkTypeName || currentWorkTypeName === null))
    .map((name)=><li className="subdivision" key={name.id}>
        <Button>{name.name}</Button>
    </li>)
    return (
        <ul className="main-window">
            {nameList}
        </ul>
    )
}