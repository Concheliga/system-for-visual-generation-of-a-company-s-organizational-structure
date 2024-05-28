import Button from "./Button";

export default function NameList({nameModel, locationId, subDivisionId, divisionId, groupId, setNameCount }) {
    let names = nameModel.names
    let nameList = names
    .filter((name)=>(name.locationsId.includes(locationId) || locationId === null)
    && (name.subDivisionsId.includes(subDivisionId) || subDivisionId === null) && (name.divisionsId.includes(divisionId) || divisionId === null)
    && (name.groupsId.includes(groupId) || groupId === null))
    .map((name)=><li className="subdivision" key={name.id}>
        <Button>{name.name}</Button>
    </li>)
    return (
        <ul className="main-window">
            {nameList}
        </ul>
    )
}