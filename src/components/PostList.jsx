import Button from "./Button";

export default function PostList({groupId, locationId, subDivisionId, divisionId, nameModel}) {
    let names = nameModel.names
    let postList = names
    .filter((name)=>(name.locationsId.includes(locationId) || locationId === null)
    && (name.subDivisionsId.includes(subDivisionId) || subDivisionId === null) && (name.divisionsId.includes(divisionId) || divisionId === null)
    && (name.groupsId.includes(groupId) || groupId === null))
    .map((name)=><li className="subdivision" key={name.id}>
        <Button>{name.postName}</Button>
    </li>)
    return (
        <ul className="main-window">
            {postList}
        </ul>
    )
}