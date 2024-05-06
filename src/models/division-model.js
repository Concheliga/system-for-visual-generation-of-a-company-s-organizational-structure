import {getDivision} from "../mock/division";

export default class DivisionModel{
    #divisions = Array.from({lengtn: 4}, getDivision);

    get divisions(){
        return this.#divisions;
    }
}