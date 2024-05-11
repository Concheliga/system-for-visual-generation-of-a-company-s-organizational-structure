import Button from "./Button";

export default function NameList({nameModel, postId, locationId, subDivisionId, divisionId, groupId, workTypeId}) {
    let names = nameModel.names
    let nameList = names
    .filter((name)=>(name.workTypeId === workTypeId || workTypeId === null) && (name.postId === postId || postId === null) && (name.locationId === locationId || locationId === null)
    && (name.subDivisionId === subDivisionId || subDivisionId === null) && (name.divisionId === divisionId || divisionId === null)
    && (name.groupId === groupId || groupId === null))
    .map((name)=><li className="subdivision" key={name.id}>
        <Button>{name.name}</Button>
    </li>)
    return (
        <ul className="main-window">
            {nameList}
        </ul>
    )
}