import {getDivision} from "../mock/division";

export default class DivisionModel{
    #divisions = getDivision();

    get divisions(){
        return this.#divisions;
    }
}