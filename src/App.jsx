
import Timeline from "./composant/Timeline1"
//*import "./App.css"
import "./index.css"
import SideBar from "./SiderBar/SideBar"
import Trends from "./assets/Trends/Trend"
//*import { Router,Route,Switch } from "react-router-dom"


function App() {
  return (
    <>
    <SideBar/>
    <Timeline/>
    <Trends/>
    {/* <Router>
      <Switch>
         <Route exact path ="/" component={Home}/> 
      </Switch>
      
    </Router> */}
    
    </>
  )
}

export default App
