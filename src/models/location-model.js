import {getLocations} from "../mock/location";

export default class LocationModel{
    #locations = getLocations();

    get locations(){
        return this.#locations;
    }
}
