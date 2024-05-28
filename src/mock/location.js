import { LOCATIONS } from "../const";
import { createIdGenerator} from "../utils";

const locationId = createIdGenerator();

function getLocations(){
    let locations = [{
        id: locationId(),
        name:'Все локации'
    }];
    for (let i = 0; i < LOCATIONS.length; i++){
        locations.push({
            id: locationId(),
            name: LOCATIONS[i]
        })    
    }
    return locations;
}

export {getLocations};