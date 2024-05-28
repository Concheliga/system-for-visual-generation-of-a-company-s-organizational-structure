import Button from "./Button";

export default function WorkTypeList({ nameModel, groupId, locationId, subDivisionId, divisionId }) {
    let names = nameModel.names
    let WorkTypeList = names
    .filter((name)=>(name.locationsId.includes(locationId) || locationId === null)
    && (name.subDivisionsId.includes(subDivisionId) || subDivisionId === null) && (name.divisionsId.includes(divisionId) || divisionId === null)
    && (name.groupsId.includes(groupId) || groupId === null))
    .map((name)=><li className="subdivision" key={name.id}>
        <Button>{name.workTypeName}</Button>
    </li>)
    return (
        <ul className="main-window">
            {WorkTypeList}
        </ul>
    )
}