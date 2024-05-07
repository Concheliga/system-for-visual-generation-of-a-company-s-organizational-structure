import Button from "./Button";
import SubDivisionModel from "../models/sub-division-model";

export default function SubDivisionList() {
    let subDivisionModel = new SubDivisionModel();
    let subDivisions = subDivisionModel.subDivisions
    let subDivisionList = subDivisions.map((subDivision)=><li className="subdivision" key={subDivision.id}><Button>{subDivision.name}</Button></li>)
    return (
        <ul className="main-window">
            {subDivisionList}
        </ul>
    )
}