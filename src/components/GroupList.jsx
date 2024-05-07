import Button from "./Button";
import GroupModel from "../models/group-model";

export default function GroupList() {
    let groupModel = new GroupModel();
    let groups = groupModel.groups
    let groupList = groups.map((group)=><li className="subdivision" key={group.id}><Button>{group.name}</Button></li>)
    return (
        <ul className="main-window">
            {groupList}
        </ul>
    )
}