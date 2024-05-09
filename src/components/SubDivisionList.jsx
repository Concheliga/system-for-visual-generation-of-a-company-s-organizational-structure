import Button from "./Button";

export default function SubDivisionList({subDivisionModel}) {
    let subDivisions = subDivisionModel.subDivisions
    let subDivisionList = subDivisions.map((subDivision)=><li className="subdivision" key={subDivision.id}><Button>{subDivision.name}</Button></li>)
    return (
        <ul className="main-window">
            {subDivisionList}
        </ul>
    )
}