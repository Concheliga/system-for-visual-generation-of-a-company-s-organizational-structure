import Button from "./Button";

export default function SubDivisionList({subDivisionModel, locationId, setSubDivisionId, onButtonClick, tabHistory}) {
    let subDivisions = subDivisionModel.subDivisions
    let subDivisionList = subDivisions
    .filter((subDivision)=>(subDivision.locationId === locationId) || (locationId === null))
    .map((subDivision)=><li className="subdivision" key={subDivision.id}>
    <Button onClick={()=>{
            onButtonClick("DivisionList", tabHistory)
            return setSubDivisionId(subDivision.id)
        }}>{subDivision.name}</Button></li>)

    return (
        <ul className="main-window">
            {subDivisionList}
        </ul>
    )
}