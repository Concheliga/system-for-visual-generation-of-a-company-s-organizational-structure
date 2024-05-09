import Button from "./Button";

export default function DivisionList({divisionModel}) {
    let divisions = divisionModel.divisions
    let divisionList = divisions.map((division)=><li className="subdivision" key={division.id}><Button>{division.name}</Button></li>)
    return (
        <ul className="main-window">
            {divisionList}
        </ul>
    )
}