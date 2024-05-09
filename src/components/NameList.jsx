import Button from "./Button";

export default function NameList({nameModel, postId}) {
    let names = nameModel.names
    let nameList = names
    .filter((name)=>(name.divisionId === postId) || (postId === null))
    .map((name)=><li className="subdivision" key={name.id}>
        <Button>{name.name}</Button>
    </li>)
    return (
        <ul className="main-window">
            {nameList}
        </ul>
    )
}