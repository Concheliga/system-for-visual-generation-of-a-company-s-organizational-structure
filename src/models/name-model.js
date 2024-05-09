import {getName} from "../mock/name";

export default class NameModel{
    #names = Array.from({length: 50}, getName);

    get names(){
        return this.#names;
    }
}