import {getName} from "../mock/name";

export default class WorkTypeModel{
    #types = Array.from(getName(), (element)=>element.workTypeName)

    get types(){
        return this.#types;
    }
}