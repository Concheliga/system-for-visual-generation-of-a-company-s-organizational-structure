import Button from "./Button";
import PostModel from "../models/post-model";

export default function PostList() {
    let postModel = new PostModel();
    let posts = postModel.posts
    let postList = posts.map((post)=><li className="subdivision" key={post.id}><Button>{post.name}</Button></li>)
    return (
        <ul className="main-window">
            {postList}
        </ul>
    )
}