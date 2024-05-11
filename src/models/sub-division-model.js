import {getSubDivision} from "../mock/sub-division";

export default class SubDivisionModel{
    #subDivisions = Array.from({length: 20}, getSubDivision);

    get subDivisions(){
        return this.#subDivisions;
    }
}