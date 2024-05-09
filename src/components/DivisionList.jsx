import Button from "./Button";

export default function DivisionList({divisionModel, subDivisionId, setDivisionId}) {
    let divisions = divisionModel.divisions
    let divisionList = divisions
    .filter((division)=>(division.subDivisionId === subDivisionId) || (subDivisionId === null))
    .map((division)=><li className="subdivision" key={division.id}>
        <Button onClick={()=>setDivisionId(division.id)}>{division.name}</Button>
    </li>)

    return (
        <ul className="main-window">
            {divisionList}
        </ul>
    )
}