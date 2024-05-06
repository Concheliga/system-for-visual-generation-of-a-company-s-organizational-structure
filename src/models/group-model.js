import {getGroup} from "../mock/group";

export default class GroupModel{
    #groups = Array.from({lengtn: 4}, getGroup);

    get groups(){
        return this.#groups;
    }
}