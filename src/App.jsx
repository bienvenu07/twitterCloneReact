
import Timeline from "./composant/Timeline1"
//*import "./App.css"
import "./index.css"
import SideBar from "./SiderBar/SideBar"
import Trends from "./assets/Trends/Trend"
import { TweetContext } from "./Context/TweetContext"
import { useState } from "react"
import  data  from "./data/data.json"
//*import { Router,Route,Switch } from "react-router-dom"


function App() {
  const [donne, setData]=useState(data)
  return (
    <>
    <TweetContext.Provider value={[donne, setData]}>
    <SideBar/>
    <Timeline/>
    <Trends/>
    </TweetContext.Provider>
    </>
  )
}

export default App
