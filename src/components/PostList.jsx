import Button from "./Button";

export default function PostList({groupId, locationId, subDivisionId, divisionId, nameModel, setCurrentPostName, onButtonClick, tabHistory}) {
    let names = nameModel.names;
    let posts = [];

    function filterPosts(name){
        if (posts.includes(name.postName)) return false;
        posts.push(name.postName);
        return (name.locationsId.includes(locationId) || locationId === null) && (name.subDivisionsId.includes(subDivisionId) || subDivisionId === null)
        && (name.divisionsId.includes(divisionId) || divisionId === null) && (name.groupsId.includes(groupId) || groupId === null);
    }

    let filteredList = names.filter((name)=>filterPosts(name));
    let postList = filteredList.map((name)=><li className="subdivision" key={name.id}>
        <Button onClick={()=>{
            onButtonClick("WorkTypeList", tabHistory);
            return setCurrentPostName(name.postName);
        }}>{name.postName}</Button>
    </li>);
    return (
        <ul className="main-window">
            <li className="subdivision"><Button onClick={()=>{
                onButtonClick("WorkTypeList", tabHistory);
                return setCurrentPostName(null);
            }}>Все должности</Button></li>
            {postList}
        </ul>
    )
}