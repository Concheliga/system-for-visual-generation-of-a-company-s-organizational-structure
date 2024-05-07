import Button from "./Button";
import DivisionModel from "../models/division-model";

export default function DivisionList() {
    let divisionModel = new DivisionModel();
    let divisions = divisionModel.divisions
    let divisionList = divisions.map((division)=><li className="subdivision" key={division.id}><Button>{division.name}</Button></li>)
    return (
        <ul className="main-window">
            {divisionList}
        </ul>
    )
}