import Button from "./Button";

export default function SubDivisionList({subDivisionModel, locationId, setSubDivisionId}) {
    let subDivisions = subDivisionModel.subDivisions
    let subDivisionList = subDivisions
    .filter((subDivision)=>(subDivision.locationId === locationId) || (locationId === null))
    .map((subDivision)=><li className="subdivision" key={subDivision.id}>
    <Button onClick={()=>setSubDivisionId(subDivision.id)}>{subDivision.name}</Button></li>)

    return (
        <ul className="main-window">
            {subDivisionList}
        </ul>
    )
}