import Button from "./Button";

export default function PostList({workTypeModel, setWorkTypeId, postId, groupId, locationId, subDivisionId, divisionId, onButtonClick, tabHistory}) {
    let types = workTypeModel.types
    let typeList = types
    .filter((type)=>(type.postId === postId || groupId === null) && (type.groupId === groupId || groupId === null) && (type.locationId === locationId || locationId === null)
    && (type.subDivisionId === subDivisionId || subDivisionId === null) && (type.divisionId === divisionId || divisionId === null))
    .map((type)=><li className="subdivision" key={type.id}>
        <Button onClick={()=>{
            onButtonClick("NameList", tabHistory)
            return setWorkTypeId(type.id)
        }}>{type.name}</Button>
    </li>)
    return (
        <ul className="main-window">
            {typeList}
        </ul>
    )
}