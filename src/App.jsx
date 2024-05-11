import { useState } from "react"
import Navigation from "./components/Navigation"
import MainWindow from "./components/mainWindow"
import Button from "./components/Button"
import navButton from "/navButton.svg"

export default function App() {
  const [tab, setTab] = useState("LocationList")
  const [tabHistory, setTabHistory] = useState(["LocationList"])
  const [isNavigationOpen, setIsNavigationOpen] = useState(false)
  const [locationId, setLocationId] = useState(null)
  const [subDivisionId, setSubDivisionId] = useState(null)
  const [divisionId, setDivisionId] = useState(null)
  const [groupId, setGroupId] = useState(null)
  const [postId, setPostId] = useState(null)
  const [workTypeId, setWorkTypeId] = useState(null)

  function navigationButtonAction(){
    isNavigationOpen?setIsNavigationOpen(false):setIsNavigationOpen(true)
  }

  function backButtonChange(tabHistory, setLocationId, setSubDivisionId, setDivisionId, setGroupId, setPostId, setWorkTypeId){
    if (tabHistory.length >= 2){
      if(tabHistory[tabHistory.length - 2] === "LocationList") setLocationId(null)
      if(tabHistory[tabHistory.length - 2] === "SubDivisionList") setSubDivisionId(null)
      if(tabHistory[tabHistory.length - 2] === "DivisionList") setDivisionId(null)
      if(tabHistory[tabHistory.length - 2] === "GroupList") setGroupId(null)
      if(tabHistory[tabHistory.length - 2] === "PostList") setPostId(null)
      if(tabHistory[tabHistory.length - 2] === "WorkTypeList") setWorkTypeId(null)
      setTab(tabHistory[tabHistory.length - 2])
      setTabHistory(tabHistory.slice(0, tabHistory.length - 1))
    }
  }

  function navigationChange(current, tabHistory){
    tabHistory.push(current)
    setTabHistory(tabHistory)
    setTab(current)
    }

  return (
    <>
      <main>
          <Navigation tabHistory={tabHistory} onChange={navigationChange} open={isNavigationOpen} setLocationId={setLocationId} setSubDivisionId={setSubDivisionId} 
          setDivisionId={setDivisionId} setGroupId={setGroupId} setPostId={setPostId} setWorkTypeId={setWorkTypeId} />
          <MainWindow tab={tab} tabHistory={tabHistory} onChange={backButtonChange} onButtonClick={navigationChange} locationId={locationId} setLocationId={setLocationId} 
          subDivisionId={subDivisionId} setSubDivisionId={setSubDivisionId} divisionId={divisionId} setDivisionId={setDivisionId} groupId={groupId} 
          setGroupId={setGroupId} postId={postId} setPostId={setPostId} workTypeId={workTypeId} setWorkTypeId={setWorkTypeId} />
      </main>
      <Button className={"navigation-button"} onClick={navigationButtonAction}><img src={navButton} alt="кнопка навигиции"></img></Button>
    </>
  )
}
