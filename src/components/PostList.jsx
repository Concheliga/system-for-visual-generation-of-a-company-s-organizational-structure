import Button from "./Button";

export default function LocationList() {
    return (
    <ul className="main-window">
        <li className="lockation">
            <h2 className="location-header"><Button>Должность 1</Button></h2>
            <ul className="subdivisions">
                <li className="subdivision"><Button>ФИО 1</Button></li>
                <li className="subdivision"><Button>ФИО 2</Button></li>
                <li className="subdivision"><Button>ФИО 3</Button></li>
                <li className="subdivision"><Button>ФИО 4</Button></li>
            </ul>
        </li>
        <li className="lockation">
            <h2 className="location-header"><Button>Должность 2</Button></h2>
            <ul className="subdivisions">
                <li className="subdivision"><Button>ФИО 1</Button></li>
                <li className="subdivision"><Button>ФИО 2</Button></li>
                <li className="subdivision"><Button>ФИО 3</Button></li>
                <li className="subdivision"><Button>ФИО 4</Button></li>
            </ul>
        </li>
        <li className="lockation">
            <h2 className="location-header"><Button>Должность 3</Button></h2>
            <ul className="subdivisions">
                <li className="subdivision"><Button>ФИО 1</Button></li>
                <li className="subdivision"><Button>ФИО 2</Button></li>
                <li className="subdivision"><Button>ФИО 3</Button></li>
                <li className="subdivision"><Button>ФИО 4</Button></li>
            </ul>
        </li>
        <li className="lockation">
            <h2 className="location-header"><Button>Должность 4</Button></h2>
            <ul className="subdivisions">
                <li className="subdivision"><Button>ФИО 1</Button></li>
                <li className="subdivision"><Button>ФИО 2</Button></li>
                <li className="subdivision"><Button>ФИО 3</Button></li>
                <li className="subdivision"><Button>ФИО 4</Button></li>
            </ul>
        </li>
    </ul>
    )
}