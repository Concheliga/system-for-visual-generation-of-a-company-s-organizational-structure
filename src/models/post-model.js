import {getPost} from "../mock/post";

export default class PostModel{
    #posts = Array.from({lengtn: 4}, getPost);

    get posts(){
        return this.#posts;
    }
}