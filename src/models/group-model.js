import {getGroup} from "../mock/group";

export default class GroupModel{
    #groups = getGroup();

    get groups(){
        return this.#groups;
    }
}