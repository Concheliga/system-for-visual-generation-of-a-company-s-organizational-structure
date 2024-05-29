import Button from "./Button";

export default function WorkTypeList({ nameModel, groupId, locationId, subDivisionId, divisionId, setCurrentWorkTypeName, currentPostName, onButtonClick, tabHistory }) {
    let names = nameModel.names;
    let workTypes = [];

    function filterWorkTypes(name){
        if (workTypes.includes(name.workTypeName)) return false;
        workTypes.push(name.workTypeName);
        return (name.locationsId.includes(locationId) || locationId === null) && (name.subDivisionsId.includes(subDivisionId) || subDivisionId === null)
        && (name.divisionsId.includes(divisionId) || divisionId === null) && (name.groupsId.includes(groupId) || groupId === null);
    }

    let filteredList = names.filter((name)=>filterWorkTypes(name));
    let WorkTypeList = filteredList.map((name)=><li className="subdivision" key={name.id}>
        <Button onClick={()=>{
            onButtonClick("NameList", tabHistory);
            return setCurrentWorkTypeName(name.workTypeName);
        }}>{name.workTypeName}</Button>
    </li>)
    return (
        <ul className="main-window">
            <li className="subdivision"><Button onClick={()=>{
                onButtonClick("NameList", tabHistory);
                return setCurrentWorkTypeName(null);
            }}>Все типы работы</Button></li>
            {WorkTypeList}
        </ul>
    )
}