import {getName} from "../mock/name";

export default class NameModel{
    #names = Array.from({length: 16}, getName);

    get names(){
        return this.#names;
    }
}