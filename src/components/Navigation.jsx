import Button from "./Button"

export default function Navigation({ children, onChange, tabHistory, open, locationId, setLocationId, subDivisionId, setSubDivisionId, divisionId, setDivisionId,
    groupId, setGroupId, postId, setPostId }){
    const setIdArray = [setPostId, setGroupId, setDivisionId, setSubDivisionId, setLocationId]

    function resetNextIds(setIdArray, setCurrentId){
        for (let setId of setIdArray){
            if (setCurrentId === setId) {
                setId(null)
                return
            }
            setId(null)
        }
    }

    return(
        <dialog open={open}>
            <nav className="navigation">
                <h1 className="navigation-header">Навигация</h1>
                <ul className="navigation-list">
                    <li className="navigation-item"><Button onClick={()=>{
                        resetNextIds(setIdArray, setLocationId)
                        onChange('LocationList', tabHistory)
                    }}>Локация</Button></li>
                    <li className="navigation-item"><Button onClick={()=>{
                        resetNextIds(setIdArray, setSubDivisionId)
                        onChange('SubDivisionList', tabHistory)
                    }}>Подразделение</Button></li>
                    <li className="navigation-item"><Button onClick={()=>{
                        resetNextIds(setIdArray, setDivisionId)
                        onChange('DivisionList', tabHistory)
                    }}>Отдел</Button></li>
                    <li className="navigation-item"><Button onClick={()=>{
                        resetNextIds(setIdArray, setGroupId)
                        onChange('GroupList', tabHistory)
                    }}>Группа</Button></li>
                    <li className="navigation-item"><Button onClick={()=>{
                        resetNextIds(setIdArray, setPostId)
                        onChange('PostList', tabHistory)
                    }}>Должность</Button></li>
                    <li className="navigation-item"><Button onClick={()=>onChange('NameList', tabHistory)}>ФИО</Button></li>
                </ul>
            </nav>
            {children}
        </dialog>
    )
}