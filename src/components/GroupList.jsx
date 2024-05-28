import Button from "./Button";

export default function GroupList({groupModel, divisionId, setGroupId, locationId, subDivisionId, onButtonClick, tabHistory}) {
    let groups = groupModel.groups
    let groupList = groups
    .filter((group)=>(group.divisionsId.includes(divisionId) || divisionId === null) && (group.locationsId.includes(locationId) || locationId === null)
    && (group.subDivisionsId.includes(subDivisionId) || subDivisionId === null))
    .map((group)=><li className="subdivision" key={group.id}>
        <Button onClick={()=>{
            onButtonClick("PostList", tabHistory)
            return setGroupId(group.id)
        }}>{group.name}</Button>
    </li>)
    return (
        <ul className="main-window">
            {groupList}
        </ul>
    )
}