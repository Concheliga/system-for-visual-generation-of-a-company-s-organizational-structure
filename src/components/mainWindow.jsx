import LocationModel from '../models/location-model';
import SubDivisionModel from '../models/sub-division-model';
import DivisionModel from '../models/division-model';
import GroupModel from '../models/group-model';
import PostModel from '../models/post-model';
import WorkTypeModel from '../models/work-type-model';
import NameModel from '../models/name-model';
import LocationList from './LocationList';
import SubDivisionList from './SubDivisionList';
import arrow from '/Arrow.svg';
import DivisionList from './DivisionList';
import GroupList from './GroupList';
import PostList from './PostList';
import Button from './Button';
import NameList from './NameList';
import WorkTypeList from './WorkTypeList';
import { useState, useEffect } from 'react';

const locationModel = new LocationModel()
const subDivisionModel = new SubDivisionModel()
const divisionModel = new DivisionModel()
const groupModel = new GroupModel()
const postModel = new PostModel()
const nameModel = new NameModel()
const workTypeModel = new WorkTypeModel()

export default function MainWindow({ tab, tabHistory, onChange, onButtonClick, locationId, setLocationId, subDivisionId, setSubDivisionId, divisionId, setDivisionId,
    groupId, setGroupId, postId, setPostId, workTypeId, setWorkTypeId }){
    const [nameCount, setNameCount] = useState(nameModel.names.length)
    useEffect(()=>{
        setNameCount(nameModel.names
            .filter((name)=>(name.locationsId.includes(locationId) || locationId === null)
            && (name.subDivisionsId.includes(subDivisionId) || subDivisionId === null) && (name.divisionsId.includes(divisionId) || divisionId === null)
            && (name.groupsId.includes(groupId) || groupId === null)).length)
    }, [locationId, subDivisionId, divisionId, groupId])
    
    function getPath(){
        let path = ""
        for (const location of locationModel.locations) if (locationId === location.id && locationId != 1) path += "/" + location.name
        for (const subDivision of subDivisionModel.subDivisions) if (subDivisionId === subDivision.id && subDivisionId != 1) path += "/" + subDivision.name
        for (const division of divisionModel.divisions) if (divisionId === division.id && divisionId != 1) path += "/" + division.name
        for (const group of groupModel.groups) if (groupId === group.id && groupId != 1) path += "/" + group.name
        for (const post of postModel.posts) if (postId === post.id && postId != 1) path += "/" + post.name
        for (const type of workTypeModel.types) if (workTypeId === type.id && workTypeId != 1) path += "/" + type.name
        return path
    }

    return(
        <section className="main-window-section">
            <h1 className="path-header">Путь:{getPath()}</h1>
            <p className="counter">Количество сотрудников: {nameCount}</p>
            {tab === "LocationList" && (<LocationList locationModel={locationModel} setLocationId={setLocationId} onButtonClick={onButtonClick} tabHistory={tabHistory} />)}
            {tab === "SubDivisionList" && (<SubDivisionList subDivisionModel={subDivisionModel} locationId={locationId} setSubDivisionId={setSubDivisionId} onButtonClick={onButtonClick} tabHistory={tabHistory} />)}
            {tab === "DivisionList" && (<DivisionList divisionModel={divisionModel} subDivisionId={subDivisionId} setDivisionId={setDivisionId} locationId={locationId} onButtonClick={onButtonClick} tabHistory={tabHistory} />)}
            {tab === "GroupList" && (<GroupList groupModel={groupModel} divisionId={divisionId} setGroupId={setGroupId} locationId={locationId} subDivisionId={subDivisionId} onButtonClick={onButtonClick} tabHistory={tabHistory} />)}
            {tab === "PostList" && (<PostList nameModel={nameModel} groupId={groupId} locationId={locationId} subDivisionId={subDivisionId} divisionId={divisionId} />)}
            {tab === "WorkTypeList" && (<WorkTypeList nameModel={nameModel} groupId={groupId} locationId={locationId} subDivisionId={subDivisionId} divisionId={divisionId} />)}
            {tab === "NameList" && (<NameList nameModel={nameModel} workTypeId={workTypeId} postId={postId} locationId={locationId} subDivisionId={subDivisionId} divisionId={divisionId} groupId={groupId} setNameCount={setNameCount} />)}
            <Button onClick={()=>onChange(tabHistory, setLocationId, setSubDivisionId, setDivisionId, setGroupId, setPostId, setWorkTypeId)}><img src={arrow} alt="Стрелка назад" /></Button>
        </section>
    )
}