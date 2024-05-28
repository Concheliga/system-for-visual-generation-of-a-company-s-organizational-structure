import Button from "./Button";

export default function DivisionList({divisionModel, subDivisionId, setDivisionId, locationId, onButtonClick, tabHistory}) {
    let divisions = divisionModel.divisions
    let divisionList = divisions
    .filter((division)=>(division.subDivisionsId.includes(subDivisionId) || subDivisionId === null) && (division.locationsId.includes(locationId) || locationId === null))
    .map((division)=><li className="subdivision" key={division.id}>
        <Button onClick={()=>{
            onButtonClick("GroupList", tabHistory)
            return setDivisionId(division.id)
        }}>{division.name}</Button>
    </li>)

    return (
        <ul className="main-window">
            {divisionList}
        </ul>
    )
}