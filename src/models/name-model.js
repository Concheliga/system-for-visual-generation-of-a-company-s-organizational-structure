import {getName} from "../mock/name";

export default class NameModel{
    #names = getName();

    get names(){
        return this.#names;
    }
}