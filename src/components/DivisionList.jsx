import Button from "./Button";

export default function LocationList() {
    return (
    <ul className="main-window">
        <li className="lockation">
            <h2 className="location-header"><Button>Отдел 1</Button></h2>
            <ul className="subdivisions">
                <li className="subdivision"><Button>Группа 1</Button></li>
                <li className="subdivision"><Button>Группа 2</Button></li>
                <li className="subdivision"><Button>Группа 3</Button></li>
                <li className="subdivision"><Button>Группа 4</Button></li>
            </ul>
        </li>
        <li className="lockation">
            <h2 className="location-header"><Button>Отдел 2</Button></h2>
            <ul className="subdivisions">
                <li className="subdivision"><Button>Группа 1</Button></li>
                <li className="subdivision"><Button>Группа 2</Button></li>
                <li className="subdivision"><Button>Группа 3</Button></li>
                <li className="subdivision"><Button>Группа 4</Button></li>
            </ul>
        </li>
        <li className="lockation">
            <h2 className="location-header"><Button>Отдел 3</Button></h2>
            <ul className="subdivisions">
                <li className="subdivision"><Button>Группа 1</Button></li>
                <li className="subdivision"><Button>Группа 2</Button></li>
                <li className="subdivision"><Button>Группа 3</Button></li>
                <li className="subdivision"><Button>Группа 4</Button></li>
            </ul>
        </li>
        <li className="lockation">
            <h2 className="location-header"><Button>Отдел 4</Button></h2>
            <ul className="subdivisions">
                <li className="subdivision"><Button>Группа 1</Button></li>
                <li className="subdivision"><Button>Группа 2</Button></li>
                <li className="subdivision"><Button>Группа 3</Button></li>
                <li className="subdivision"><Button>Группа 4</Button></li>
            </ul>
        </li>
    </ul>
    )
}