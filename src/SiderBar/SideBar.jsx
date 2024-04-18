import { Link } from "react-router-dom"
import Twitter from "../assets/icon/iconblanc/Twitter.svg"
import HomeFille from "../assets/icon/iconblanc/Home-Fill.svg"
import Explore from "../assets/icon/iconblanc/Explore.svg"
import Notifications from "../assets/icon/iconblanc/Notifications.svg"
import Messages from "../assets/icon/iconblanc/Messages.svg"
import Bookmarks from "../assets/icon/iconblanc/Bookmarks.svg"
import Lists from "../assets/icon/iconblanc/Lists.svg"
import Profile from "../assets/icon/iconblanc/Profile.svg"
import More from "../assets/icon/iconblanc/More.svg"
import "./SideBar.css"
import Private from "../assets/icon/iconblanc/Private.svg"
import ProfilePhoto from "../assets/img/Profile-Photo.png"


export default function SideBar(){
    return(
        <div className="w-[30%] ml-[1.5rem] mt-[1rem] h-[100vh]">
           <div className="sidebar-content">
           <Link to ="/">
                <img src={Twitter}  alt=""/>
            </Link>
            <Link to ="/">
                <div className="side-nav">
                <img src={HomeFille}  alt=""/>
                <div className="page-title-sidebare"> Home</div>
                </div>
            </Link>
            <Link to ="/">
                <div className="side-nav">
                    <img src={Explore}  alt=""/>
                <div className="page-title-sidebare"> Explore</div></div>
            </Link>
            <Link to ="/">
                <div className="side-nav">
                <img src={Notifications}  alt=""/>
                <div className="page-title-sidebare"> Notification</div>
                </div>
            </Link>
            <Link to ="/">
                <div className="side-nav">
                <img src={Messages}  alt=""/>
                <div className="page-title-sidebare"> Messages</div>
                </div>
            </Link>
            <Link to ="/">
                <div className="side-nav">
                <img src={Bookmarks}  alt=""/>
                <div className="page-title-sidebare"> Bookmarks</div>
                </div>
            </Link>
            <Link to ="/">
                <div className="side-nav">
                <img src={Lists}  alt=""/>
                <div className="page-title-sidebare"> Lists</div>
                </div>
            </Link>
            <Link to ="/">
                <div className="side-nav">
                <img src={Profile}  alt=""/>
                <div className="page-title-sidebare"> Profile</div>
                </div>
            </Link>
            <Link to ="/">
                <div className="side-nav">
                <img src={More}  alt=""/>
                <div className="page-title-sidebare"> More</div>
                </div>
            </Link>
            <button  style ={{width:"90%"}} className="button">Tweet</button>
           </div>
            <div className="User-smollfotter">
                <img src={ProfilePhoto} alt =""/>
                <div className="contena-footer">
                   <h5> Bradley ortiz       <span><img src ={Private} /></span> </h5> 
                    <small>@Bradley</small>
                </div>
            </div>

        </div>
        
    )
}