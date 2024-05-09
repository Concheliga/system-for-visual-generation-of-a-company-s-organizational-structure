import Button from "./Button";

export default function GroupList({groupModel, divisionId, setGroupId}) {
    let groups = groupModel.groups
    let groupList = groups
    .filter((group)=>(group.divisionId === divisionId) || (divisionId === null))
    .map((group)=><li className="subdivision" key={group.id}>
        <Button onClick={()=>setGroupId(group.id)}>{group.name}</Button>
    </li>)
    return (
        <ul className="main-window">
            {groupList}
        </ul>
    )
}