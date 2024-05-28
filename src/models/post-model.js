import { getName } from "../mock/name";

export default class PostModel{
    #posts = Array.from(getName(), (element)=>element.postName);

    get posts(){
        return this.#posts;
    }
}