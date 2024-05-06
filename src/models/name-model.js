import {getName} from "../mock/name";

export default class NameModel{
    #names = Array.from({lengtn: 4}, getName);

    get names(){
        return this.#names;
    }
}