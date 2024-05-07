import Button from "./Button"

export default function Navigation({ onChange, tabHistory }){
    return(
        <nav className="navigation">
            <h1 className="navigation-header">Навигация</h1>
            <ul className="navigation-list">
                <li className="navigation-item"><Button onClick={()=>onChange('LocationList', tabHistory)}>Локация</Button></li>
                <li className="navigation-item"><Button onClick={()=>onChange('SubDivisionList', tabHistory)}>Подразделение</Button></li>
                <li className="navigation-item"><Button onClick={()=>onChange('DivisionList', tabHistory)}>Отдел</Button></li>
                <li className="navigation-item"><Button onClick={()=>onChange('GroupList', tabHistory)}>Группа</Button></li>
                <li className="navigation-item"><Button onClick={()=>onChange('PostList', tabHistory)}>Должность</Button></li>
                <li className="navigation-item"><Button onClick={()=>onChange('NameList', tabHistory)}>ФИО</Button></li>
            </ul>
        </nav>
    )
}