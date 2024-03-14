import "./Trend.css"
import search  from  "../icon/iconblanc/Search.svg"
import setting from "../icon/iconblanc/Settings.svg"
import more from "../icon/iconblanc/More-2.svg"

export default function Trends(){
    return(
        <div className="trend">

            <div className="seach-twitter">  
            <img src ={search} alt=""/> 
            <input type ="text" placeholder="search-twitter"/>          
            </div>
          <div className="trend-for-you">
                <div className="trend-title">
                    <h3> Trend for you</h3>
                    <img src={setting} alt=""/>
                </div>
                <div className="squid">
                    <div className="squid-component">
                        <p> Trending in Turky</p>
                        <h3> #SQUID</h3>
                        <p> 2,OO6 Tweets</p>
                    </div>
                    <img src ={more} alt =""/>
                </div>
                <div className="squid">
                    <div className="squid-component">
                        <p> Trending in Turky</p>
                        <h3> #SQUID</h3>
                        <p> 2,OO6 Tweets</p>
                    </div>
                    <img src ={more} alt =""/>
                </div>
                <div className="squid">
                    <div className="squid-component">
                        <p> Trending in Turky</p>
                        <h3> #SQUID</h3>
                        <p> 2,OO6 Tweets</p>
                    </div>
                    <img src ={more} alt =""/>
                </div>
                <div className="squid">
                    <div className="squid-component">
                        <p> Trending in Turky</p>
                        <h3> #SQUID</h3>
                        <p> 2,OO6 Tweets</p>
                    </div>
                    <img src ={more} alt =""/>
                </div>
                <div className="show-more">
                    <h3>Show more </h3>

                </div>
            
          </div>
          
        
        </div>

    )
}