import {getSubDivision} from "../mock/sub-division";

export default class SubDivisionModel{
    #subDivisions = Array.from({lengtn: 4}, getSubDivision);

    get subDivisions(){
        return this.#subDivisions;
    }
}