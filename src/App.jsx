import { useState } from "react"
import Navigation from "./components/Navigation"
import MainWindow from "./components/mainWindow"

export default function App() {
  const [tab, setTab] = useState("LocationList")
  const [tabHistory, setTabHistory] = useState([])

  return (
    <main>
        <Navigation tabHistory={tabHistory} onChange={(current, tabHistory)=>{
          tabHistory.push(current)
          setTabHistory(tabHistory)
          console.log(tabHistory)
          setTab(current)
          }} />
        <MainWindow tab={tab} tabHistory={tabHistory} onChange={(tabHistory)=>{
          console.log(tabHistory)
          if (tabHistory.length >= 2){
            setTab(tabHistory[tabHistory.length - 2])
            setTabHistory(tabHistory.slice(0, tabHistory.length - 1))
          }
          }}/>
    </main>
  )
}
