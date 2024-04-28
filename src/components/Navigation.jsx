import Button from "./Button";

export default function Navigation({ onChange }){
    return(
        <nav className="navigation">
            <h1 className="navigation-header">Навигация</h1>
            <ul className="navigation-list">
                <li className="navigation-item"><Button onClick={()=>onChange('LocationList')}>Локация</Button></li>
                <li className="navigation-item"><Button onClick={()=>onChange('SubDivisionList')}>Подразделение</Button></li>
                <li className="navigation-item"><Button onClick={()=>onChange('DivisionList')}>Отдел</Button></li>
                <li className="navigation-item"><Button onClick={()=>onChange('GroupList')}>Группа</Button></li>
                <li className="navigation-item"><Button onClick={()=>onChange('PostList')}>Должность</Button></li>
                <li className="navigation-item"><Button>ФИО</Button></li>
            </ul>
        </nav>
    )
}