import Button from "./Button";

export default function PostList({postModel}) {
    let posts = postModel.posts
    let postList = posts.map((post)=><li className="subdivision" key={post.id}><Button>{post.name}</Button></li>)
    return (
        <ul className="main-window">
            {postList}
        </ul>
    )
}