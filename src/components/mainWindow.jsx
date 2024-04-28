import LocationList from './LocationList'
import SubDivisionList from './SubDivisionList'
import arrow from '/Arrow.svg'
import DivisionList from './DivisionList'
import GroupList from './GroupList'
import PostList from './PostList'

export default function MainWindow({ tab }){
    return(
        <section className="main-window-section">
            <h1 className="path-header">Путь:</h1>
            {tab === "LocationList" && (<LocationList />)}
            {tab === "SubDivisionList" && (<SubDivisionList />)}
            {tab === "DivisionList" && (<DivisionList />)}
            {tab === "GroupList" && (<GroupList />)}
            {tab === "PostList" && (<PostList />)}    
            <a className="back-link" href="#"><img src={arrow} alt="Стрелка назад" /></a>
        </section>
    )
}