import { useState } from "react";
import Navigation from "./components/Navigation";
import MainWindow from "./components/mainWindow";

export default function App() {
  const [tab, setTab] = useState("LocationList")

  return (
    <main>
        <Navigation onChange={(current)=>setTab(current)} />
        <MainWindow tab={tab}/>
    </main>
  )
}
