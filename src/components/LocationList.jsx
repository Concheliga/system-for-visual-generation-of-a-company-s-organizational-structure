import Button from "./Button";

export default function LocationList({ locationModel }) {
    let locations = locationModel.locations
    let locationList = locations.map((location)=><li className="subdivision" key={location.id}><Button>{location.name}</Button></li>)

    return (
        <ul className="main-window">
            {locationList}
        </ul>
    )
}