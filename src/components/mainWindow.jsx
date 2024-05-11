import LocationModel from '../models/location-model'
import SubDivisionModel from '../models/sub-division-model'
import DivisionModel from '../models/division-model'
import GroupModel from '../models/group-model'
import PostModel from '../models/post-model'
import WorkTypeModel from '../models/work-type-model'
import NameModel from '../models/name-model'
import LocationList from './LocationList'
import SubDivisionList from './SubDivisionList'
import arrow from '/Arrow.svg'
import DivisionList from './DivisionList'
import GroupList from './GroupList'
import PostList from './PostList'
import Button from './Button'
import NameList from './NameList'
import WorkTypeList from './WorkTypeList'

const locationModel = new LocationModel()
const subDivisionModel = new SubDivisionModel()
const divisionModel = new DivisionModel()
const groupModel = new GroupModel()
const postModel = new PostModel()
const nameModel = new NameModel()
const workTypeModel = new WorkTypeModel()

export default function MainWindow({ tab, tabHistory, onChange, onButtonClick, locationId, setLocationId, subDivisionId, setSubDivisionId, divisionId, setDivisionId,
    groupId, setGroupId, postId, setPostId, workTypeId, setWorkTypeId }){
    function getPath(){
        let path = ""
        for (const location of locationModel.locations) if (locationId === location.id) path += "/" + location.name
        for (const subDivision of subDivisionModel.subDivisions) if (subDivisionId === subDivision.id) path += "/" + subDivision.name
        for (const division of divisionModel.divisions) if (divisionId === division.id) path += "/" + division.name
        for (const group of groupModel.groups) if (groupId === group.id) path += "/" + group.name
        for (const post of postModel.posts) if (postId === post.id) path += "/" + post.name
        for (const type of workTypeModel.types) if (workTypeId === type.id) path += "/" + type.name
        return path
    }

    return(
        <section className="main-window-section">
            <h1 className="path-header">Путь:{getPath()}</h1>
            {tab === "LocationList" && (<LocationList locationModel={locationModel} setLocationId={setLocationId} onButtonClick={onButtonClick} tabHistory={tabHistory} />)}
            {tab === "SubDivisionList" && (<SubDivisionList subDivisionModel={subDivisionModel} locationId={locationId} setSubDivisionId={setSubDivisionId} onButtonClick={onButtonClick} tabHistory={tabHistory} />)}
            {tab === "DivisionList" && (<DivisionList divisionModel={divisionModel} subDivisionId={subDivisionId} setDivisionId={setDivisionId} locationId={locationId} onButtonClick={onButtonClick} tabHistory={tabHistory} />)}
            {tab === "GroupList" && (<GroupList groupModel={groupModel} divisionId={divisionId} setGroupId={setGroupId} locationId={locationId} subDivisionId={subDivisionId} onButtonClick={onButtonClick} tabHistory={tabHistory} />)}
            {tab === "PostList" && (<PostList postModel={postModel} groupId={groupId} setPostId={setPostId} locationId={locationId} subDivisionId={subDivisionId} divisionId={divisionId} onButtonClick={onButtonClick} tabHistory={tabHistory} />)}
            {tab === "WorkTypeList" && (<WorkTypeList workTypeModel={workTypeModel} postId={postId} setWorkTypeId={setWorkTypeId} groupId={groupId} locationId={locationId} subDivisionId={subDivisionId} divisionId={divisionId} onButtonClick={onButtonClick} tabHistory={tabHistory} />)}
            {tab === "NameList" && (<NameList nameModel={nameModel} workTypeId={workTypeId} postId={postId} locationId={locationId} subDivisionId={subDivisionId} divisionId={divisionId} groupId={groupId} />)}
            <Button onClick={()=>onChange(tabHistory, setLocationId, setSubDivisionId, setDivisionId, setGroupId, setPostId, setWorkTypeId)}><img src={arrow} alt="Стрелка назад" /></Button>
        </section>
    )
}