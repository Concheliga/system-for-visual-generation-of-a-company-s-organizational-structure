import Button from "./Button";

export default function PostList({postModel, groupId, setPostId, locationId, subDivisionId, divisionId, onButtonClick, tabHistory}) {
    let posts = postModel.posts
    let postList = posts
    .filter((post)=>(post.groupId === groupId || groupId === null) && (post.locationId === locationId || locationId === null)
    && (post.subDivisionId === subDivisionId || subDivisionId === null) && (post.divisionId === divisionId || divisionId === null))
    .map((post)=><li className="subdivision" key={post.id}>
        <Button onClick={()=>{
            onButtonClick("PostList", tabHistory)
            return setPostId(post.id)
        }}>{post.name}</Button>
    </li>)
    return (
        <ul className="main-window">
            {postList}
        </ul>
    )
}