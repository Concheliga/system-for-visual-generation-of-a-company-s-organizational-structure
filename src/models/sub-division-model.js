import {getSubDivision} from "../mock/sub-division";

export default class SubDivisionModel{
    #subDivisions = getSubDivision();

    get subDivisions(){
        return this.#subDivisions;
    }
}