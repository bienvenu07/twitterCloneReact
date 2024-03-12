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
import ProfilePhoto from "../assets/img/Profile-Photo.svg"


export default function SideBar(){
    return(
        <div>
            <Link to ="/">
                <img src={Twitter}  alt=""/>
            </Link>
            <Link to ="/">
                <img src={HomeFille}  alt=""/>
                <div className="page-title"> Home</div>
            </Link>
            <Link to ="/">
                <img src={Explore}  alt=""/>
                <div className="page-title"> Explore</div>
            </Link>
            <Link to ="/">
                <img src={Notifications}  alt=""/>
                <div className="page-title"> Notification</div>
            </Link>
            <Link to ="/">
                <img src={Messages}  alt=""/>
                <div className="page-title"> Messages</div>
            </Link>
            <Link to ="/">
                <img src={Bookmarks}  alt=""/>
                <div className="page-title"> Bookmarks</div>
            </Link>
            <Link to ="/">
                <img src={Lists}  alt=""/>
                <div className="page-title"> Lists</div>
            </Link>
            <Link to ="/">
                <img src={Profile}  alt=""/>
                <div className="page-title"> Profile</div>
            </Link>
            <Link to ="/">
                <img src={More}  alt=""/>
                <div className="page-title"> More</div>
            </Link>
            <button  style ={{whidth:"80%"}}className="button">Tweet</button>
            <div className="User-smollfotter">
                <img src={ProfilePhoto} alt =""/>
                <div className="contena-footer">
                    Bradley ortiz <span><img src ={Private} /></span>
                    <p>@Bradley</p>
                </div>
            </div>

        </div>
        
    )
}