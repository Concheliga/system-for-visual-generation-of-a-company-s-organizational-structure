import {getGroup} from "../mock/group";

export default class GroupModel{
    #groups = Array.from({length: 50}, getGroup);

    get groups(){
        return this.#groups;
    }
}