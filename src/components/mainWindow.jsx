import LocationModel from '../models/location-model'
import SubDivisionModel from '../models/sub-division-model'
import DivisionModel from '../models/division-model'
import GroupModel from '../models/group-model'
import PostModel from '../models/post-model'
import NameModel from '../models/name-model'
import LocationList from './LocationList'
import SubDivisionList from './SubDivisionList'
import arrow from '/Arrow.svg'
import DivisionList from './DivisionList'
import GroupList from './GroupList'
import PostList from './PostList'
import Button from './Button'
import NameList from './NameList'

export default function MainWindow({ tab, tabHistory, onChange }){
    const locationModel = new LocationModel()
    const subDivisionModel = new SubDivisionModel()
    const divisionModel = new DivisionModel()
    const groupModel = new GroupModel()
    const postModel = new PostModel()
    const nameModel = new NameModel()

    return(
        <section className="main-window-section">
            <h1 className="path-header">Путь:</h1>
            {tab === "LocationList" && (<LocationList locationModel={locationModel} />)}
            {tab === "SubDivisionList" && (<SubDivisionList subDivisionModel={subDivisionModel} />)}
            {tab === "DivisionList" && (<DivisionList divisionModel={divisionModel} />)}
            {tab === "GroupList" && (<GroupList groupModel={groupModel} />)}
            {tab === "PostList" && (<PostList postModel={postModel} />)}
            {tab === "NameList" && (<NameList nameModel={nameModel} />)}
            <Button onClick={()=>onChange(tabHistory)}><img src={arrow} alt="Стрелка назад" /></Button>
        </section>
    )
}