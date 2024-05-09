import Button from "./Button";

export default function GroupList({groupModel}) {
    let groups = groupModel.groups
    let groupList = groups.map((group)=><li className="subdivision" key={group.id}><Button>{group.name}</Button></li>)
    return (
        <ul className="main-window">
            {groupList}
        </ul>
    )
}