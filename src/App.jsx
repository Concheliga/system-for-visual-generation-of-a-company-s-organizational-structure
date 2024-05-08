import { useState } from "react"
import Navigation from "./components/Navigation"
import MainWindow from "./components/mainWindow"
import Button from "./components/Button"
import navButton from "/navButton.svg"

export default function App() {
  const [tab, setTab] = useState("LocationList")
  const [tabHistory, setTabHistory] = useState(["LocationList"])
  const [isNavigationOpen, setIsNavigationOpen] = useState(false)

  function navigationButtonAction(){
    isNavigationOpen?setIsNavigationOpen(false):setIsNavigationOpen(true)
  }

  function backButtonChange(tabHistory){
    if (tabHistory.length >= 2){
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
          <Navigation tabHistory={tabHistory} onChange={navigationChange} open={isNavigationOpen} />
          <MainWindow tab={tab} tabHistory={tabHistory} onChange={backButtonChange}/>
      </main>
      <Button className={"navigation-button"} onClick={navigationButtonAction}><img src={navButton} alt="кнопка навигиции"></img></Button>
    </>
  )
}
