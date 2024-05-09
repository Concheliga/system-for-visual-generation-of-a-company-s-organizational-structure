import Button from "./Button";

export default function NameList({nameModel}) {
    let names = nameModel.names
    let nameList = names.map((name)=><li className="subdivision" key={name.id}><Button>{name.name}</Button></li>)
    return (
        <ul className="main-window">
            {nameList}
        </ul>
    )
}