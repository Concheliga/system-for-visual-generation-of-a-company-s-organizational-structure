import Button from "./Button";

export default function LocationList() {
    return (
    <ul className="main-window">
        <li className="lockation">
            <h2 className="location-header"><Button>Группа 1</Button></h2>
            <ul className="subdivisions">
                <li className="subdivision"><Button>Должность 1</Button></li>
                <li className="subdivision"><Button>Должность 2</Button></li>
                <li className="subdivision"><Button>Должность 3</Button></li>
                <li className="subdivision"><Button>Должность 4</Button></li>
            </ul>
        </li>
        <li className="lockation">
            <h2 className="location-header"><Button>Группа 2</Button></h2>
            <ul className="subdivisions">
                <li className="subdivision"><Button>Должность 1</Button></li>
                <li className="subdivision"><Button>Должность 2</Button></li>
                <li className="subdivision"><Button>Должность 3</Button></li>
                <li className="subdivision"><Button>Должность 4</Button></li>
            </ul>
        </li>
        <li className="lockation">
            <h2 className="location-header"><Button>Группа 3</Button></h2>
            <ul className="subdivisions">
                <li className="subdivision"><Button>Должность 1</Button></li>
                <li className="subdivision"><Button>Должность 2</Button></li>
                <li className="subdivision"><Button>Должность 3</Button></li>
                <li className="subdivision"><Button>Должность 4</Button></li>
            </ul>
        </li>
        <li className="lockation">
            <h2 className="location-header"><Button>Группа 4</Button></h2>
            <ul className="subdivisions">
                <li className="subdivision"><Button>Должность 1</Button></li>
                <li className="subdivision"><Button>Должность 2</Button></li>
                <li className="subdivision"><Button>Должность 3</Button></li>
                <li className="subdivision"><Button>Должность 4</Button></li>
            </ul>
        </li>
    </ul>
    )
}