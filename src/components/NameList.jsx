import Button from "./Button";
import NameModel from "../models/name-model";

export default function NameList() {
    let nameModel = new NameModel();
    let names = nameModel.names
    let nameList = names.map((name)=><li className="subdivision" key={name.id}><Button>{name.name}</Button></li>)
    return (
        <ul className="main-window">
            {nameList}
        </ul>
    )
}