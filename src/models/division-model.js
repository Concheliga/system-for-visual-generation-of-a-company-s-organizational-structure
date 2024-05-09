import {getDivision} from "../mock/division";

export default class DivisionModel{
    #divisions = Array.from({length: 50}, getDivision);

    get divisions(){
        return this.#divisions;
    }
}