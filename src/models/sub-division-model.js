import {getSubDivision} from "../mock/sub-division";

export default class SubDivisionModel{
    #subDivisions = Array.from({length: 50}, getSubDivision);

    get subDivisions(){
        return this.#subDivisions;
    }
}