import {getGroup} from "../mock/group";

export default class GroupModel{
    #groups = Array.from({length: 60}, getGroup);

    get groups(){
        return this.#groups;
    }
}