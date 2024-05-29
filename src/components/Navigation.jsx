import Button from "./Button"

export default function Navigation({ children, onChange, tabHistory, open, setLocationId, setSubDivisionId, setDivisionId,
    setGroupId, tab, setCurrentPostName, setCurrentWorkTypeName }){
    const setIdArray = [setCurrentWorkTypeName, setCurrentPostName, setGroupId, setDivisionId, setSubDivisionId, setLocationId]

    function resetNextIds(setIdArray, setCurrentId){
        for (let setId of setIdArray){
            if (setCurrentId === setId) {
                setId(null)
                return
            }
            setId(null)
        }
    }

    function setTabHistory(tab, listName){
        return tab === listName ? " active" : "";
    }

    return(
        <dialog open={open}>
            <nav className="navigation">
                <h1 className="navigation-header">Навигация</h1>
                <ul className="navigation-list">
                    <li className="navigation-item"><Button setClassName={setTabHistory(tab, "LocationList")} className={"first"} onClick={()=>{
                        resetNextIds(setIdArray, setLocationId)
                        onChange('LocationList', tabHistory)
                    }}>Локация</Button></li>
                    <li className="navigation-item"><Button setClassName={setTabHistory(tab, "SubDivisionList")} onClick={()=>{
                        resetNextIds(setIdArray, setSubDivisionId)
                        onChange('SubDivisionList', tabHistory)
                    }}>Подразделение</Button></li>
                    <li className="navigation-item"><Button setClassName={setTabHistory(tab, "DivisionList")} onClick={()=>{
                        resetNextIds(setIdArray, setDivisionId)
                        onChange('DivisionList', tabHistory)
                    }}>Отдел</Button></li>
                    <li className="navigation-item"><Button setClassName={setTabHistory(tab, "GroupList")} onClick={()=>{
                        resetNextIds(setIdArray, setGroupId)
                        onChange('GroupList', tabHistory)
                    }}>Группа</Button></li>
                    <li className="navigation-item"><Button setClassName={setTabHistory(tab, "PostList")} onClick={()=>{
                        resetNextIds(setIdArray, setCurrentPostName)
                        onChange('PostList', tabHistory)
                    }}>Должность</Button></li>
                    <li className="navigation-item"><Button setClassName={setTabHistory(tab, "WorkTypeList")} onClick={()=>{
                        resetNextIds(setIdArray, setCurrentWorkTypeName)
                        onChange('WorkTypeList', tabHistory)
                    }}>Тип работы</Button></li>
                    <li className="navigation-item"><Button setClassName={setTabHistory(tab, "NameList")} className={"last"} onClick={()=>onChange('NameList', tabHistory)}>ФИО</Button></li>
                </ul>
            </nav>
            {children}
        </dialog>
    )
}