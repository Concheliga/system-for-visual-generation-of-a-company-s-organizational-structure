import {getLocation} from "../mock/location";

export default class LocationModel{
    #locations = Array.from({length: 10}, getLocation);

    get locations(){
        return this.#locations;
    }
}
