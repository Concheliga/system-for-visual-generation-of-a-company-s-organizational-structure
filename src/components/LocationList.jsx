import Button from "./Button";

export default function LocationList() {
    return (
    <ul className="main-window">
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
    </ul>
    )
}