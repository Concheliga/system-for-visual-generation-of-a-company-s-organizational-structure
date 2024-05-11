import {getDivision} from "../mock/division";

export default class DivisionModel{
    #divisions = Array.from({length: 40}, getDivision);

    get divisions(){
        return this.#divisions;
    }
}