import Button from "./Button";
import LocationModel from "../models/location-model";

export default function LocationList() {
    let locationModel = new LocationModel();
    let locations = locationModel.locations
    let locationList = locations.map((location)=><li className="subdivision" key={location.id}><Button>{location.name}</Button></li>)
    return (
        <ul className="main-window">
            {locationList}
        </ul>
    )
}

/*<ul className="main-window">
        <li className="lockation">
            <h2 className="location-header"><Button>Локация 1</Button></h2>
            <ul className="subdivisions">
                <li className="subdivision"><Button>Подразделение 1</Button></li>
                <li className="subdivision"><Button>Подразделение 2</Button></li>
                <li className="subdivision"><Button>Подразделение 3</Button></li>
                <li className="subdivision"><Button>Подразделение 4</Button></li>
            </ul>
        </li>
        <li className="lockation">
            <h2 className="location-header"><Button>Локация 2</Button></h2>
            <ul className="subdivisions">
                <li className="subdivision"><Button>Подразделение 1</Button></li>
                <li className="subdivision"><Button>Подразделение 2</Button></li>
                <li className="subdivision"><Button>Подразделение 3</Button></li>
                <li className="subdivision"><Button>Подразделение 4</Button></li>
            </ul>
        </li>
        <li className="lockation">
            <h2 className="location-header"><Button>Локация 3</Button></h2>
            <ul className="subdivisions">
                <li className="subdivision"><Button>Подразделение 1</Button></li>
                <li className="subdivision"><Button>Подразделение 2</Button></li>
                <li className="subdivision"><Button>Подразделение 3</Button></li>
                <li className="subdivision"><Button>Подразделение 4</Button></li>
            </ul>
        </li>
        <li className="lockation">
            <h2 className="location-header"><Button>Локация 4</Button></h2>
            <ul className="subdivisions">
                <li className="subdivision"><Button>Подразделение 1</Button></li>
                <li className="subdivision"><Button>Подразделение 2</Button></li>
                <li className="subdivision"><Button>Подразделение 3</Button></li>
                <li className="subdivision"><Button>Подразделение 4</Button></li>
            </ul>
        </li>
    </ul>*/