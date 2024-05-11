import {getWorkType} from "../mock/work-type";

export default class WorkTypeModel{
    #types = Array.from({length: 4}, getWorkType);

    get types(){
        return this.#types;
    }
}