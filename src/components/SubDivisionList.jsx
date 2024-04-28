import Button from "./Button";

export default function SubDivisionList() {
    return (
    <ul className="main-window">
        <li className="lockation">
            <h2 className="location-header"><Button>Подразделение 1</Button></h2>
            <ul className="subdivisions">
                <li className="subdivision"><Button>Отдел 1</Button></li>
                <li className="subdivision"><Button>Отдел 2</Button></li>
                <li className="subdivision"><Button>Отдел 3</Button></li>
                <li className="subdivision"><Button>Отдел 4</Button></li>
            </ul>
        </li>
        <li className="lockation">
            <h2 className="location-header"><Button>Подразделение 2</Button></h2>
            <ul className="subdivisions">
                <li className="subdivision"><Button>Отдел 1</Button></li>
                <li className="subdivision"><Button>Отдел 2</Button></li>
                <li className="subdivision"><Button>Отдел 3</Button></li>
                <li className="subdivision"><Button>Отдел 4</Button></li>
            </ul>
        </li>
        <li className="lockation">
            <h2 className="location-header"><Button>Подразделение 3</Button></h2>
            <ul className="subdivisions">
                <li className="subdivision"><Button>Отдел 1</Button></li>
                <li className="subdivision"><Button>Отдел 2</Button></li>
                <li className="subdivision"><Button>Отдел 3</Button></li>
                <li className="subdivision"><Button>Отдел 4</Button></li>
            </ul>
        </li>
        <li className="lockation">
            <h2 className="location-header"><Button>Подразделение 4</Button></h2>
            <ul className="subdivisions">
                <li className="subdivision"><Button>Отдел 1</Button></li>
                <li className="subdivision"><Button>Отдел 2</Button></li>
                <li className="subdivision"><Button>Отдел 3</Button></li>
                <li className="subdivision"><Button>Отдел 4</Button></li>
            </ul>
        </li>
    </ul>
    )
}