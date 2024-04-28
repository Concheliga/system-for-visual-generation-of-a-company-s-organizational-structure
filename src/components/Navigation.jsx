import Button from "./Button";

export default function Navigation(){
    return(
        <nav className="navigation">
            <h1 className="navigation-header">Навигация</h1>
            <ul className="navigation-list">
                <li className="navigation-item"><Button>Локация</Button></li>
                <li className="navigation-item"><Button>Подразделение</Button></li>
                <li className="navigation-item"><Button>Отдел</Button></li>
                <li className="navigation-item"><Button>Группа</Button></li>
                <li className="navigation-item"><Button>Должность</Button></li>
                <li className="navigation-item"><Button>ФИО</Button></li>
            </ul>
        </nav>
    )
}