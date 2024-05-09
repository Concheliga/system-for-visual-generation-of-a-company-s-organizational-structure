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
import { useState } from 'react'

export default function MainWindow({ tab, tabHistory, onChange }){
    const locationModel = new LocationModel()
    const subDivisionModel = new SubDivisionModel()
    const divisionModel = new DivisionModel()
    const groupModel = new GroupModel()
    const postModel = new PostModel()
    const nameModel = new NameModel()
    const [locationId, setLocationId] = useState(null)
    const [subDivisionId, setSubDivisionId] = useState(null)
    const [divisionId, setDivisionId] = useState(null)
    const [groupId, setGroupId] = useState(null)
    const [postId, setPostId] = useState(null)

    return(
        <section className="main-window-section">
            <h1 className="path-header">Путь:</h1>
            {tab === "LocationList" && (<LocationList locationModel={locationModel} setLocationId={setLocationId} />)}
            {tab === "SubDivisionList" && (<SubDivisionList subDivisionModel={subDivisionModel} locationId={locationId} setSubDivisionId={setSubDivisionId} />)}
            {tab === "DivisionList" && (<DivisionList divisionModel={divisionModel} subDivisionId={subDivisionId} setDivisionId={setDivisionId} />)}
            {tab === "GroupList" && (<GroupList groupModel={groupModel} divisionId={divisionId} setGroupId={setGroupId} />)}
            {tab === "PostList" && (<PostList postModel={postModel} groupId={groupId} setPostId={setPostId} />)}
            {tab === "NameList" && (<NameList nameModel={nameModel} postId={postId} />)}
            <Button onClick={()=>onChange(tabHistory)}><img src={arrow} alt="Стрелка назад" /></Button>
        </section>
    )
}