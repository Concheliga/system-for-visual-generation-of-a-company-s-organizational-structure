import Button from "./Button";

export default function PostList({postModel, groupId, setPostId}) {
    let posts = postModel.posts
    let postList = posts
    .filter((post)=>(post.divisionId === groupId) || (groupId === null))
    .map((post)=><li className="subdivision" key={post.id}>
        <Button onClick={()=>setPostId(post.id)}>{post.name}</Button>
    </li>)
    return (
        <ul className="main-window">
            {postList}
        </ul>
    )
}