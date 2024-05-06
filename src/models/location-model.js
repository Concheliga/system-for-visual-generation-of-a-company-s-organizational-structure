import {getLocation} from "../mock/location";

export default class LocationModel{
    #locations = Array.from({lengtn: 4}, getLocation);

    get locations(){
        return this.#locations;
    }
}
