import {getPost} from "../mock/post";

export default class PostModel{
    #posts = Array.from({length: 50}, getPost);

    get posts(){
        return this.#posts;
    }
}