import "./Trend.css"
import search  from  "../icon/iconblanc/Search.svg"
import setting from "../icon/iconblanc/Settings.svg"
import more from "../icon/iconblanc/More-2.svg"
import Tweetavatar2 from "/Tweetavatar2.svg"
import Tweetavatar1 from "/Tweetavatar1.svg"
import Tweetavatar3 from "/Tweetavatar3.svg"
import verified from "../icon/iconblanc/Verified.svg"


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
          <div className="who-to-follow">
             
             <div className="who-to">
                  <h3> Who to follow</h3>
             </div>
             <div className="the-new-york-times">
                
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <div className="new-york"> 
                <img src={Tweetavatar2} alt=""/> 

                    <div className="gaden">          
                     <h4 style={{padding:0,margin:0,color:"white"}}> The New York Times  <img className ="redimatn" src={verified} alt =""/>  </h4>
                     
                    <p> @nytimes</p>
                   
                    </div>
                
                    </div>
                 <button className ="buttona">Follow</button>
                </div>


                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <div className="new-york"> 
                <img src={Tweetavatar1} alt=""/> 

                    <div className="gaden">          
                     <h4 style={{padding:0,margin:0,color:"white"}}> CNN <img className="redimatn" src={verified} alt =""/>  </h4>
                     
                    <p> @CNN </p>
                   
                    </div>
                
                    </div>
                 <button className ="buttona">Follow</button>
                </div>


                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <div className="new-york"> 
                <img src={Tweetavatar3} alt=""/> 

                    <div className="gaden">          
                     <h4 style={{padding:0,margin:0,color:"white"}}> Twitter <img className="redimatn" src={verified} alt =""/>  </h4>
                     
                    <p> @Twitter</p>
                   
                    </div>
                
                    </div>
                 <button className ="buttona">Follow</button>
                </div>


















             
             


             <div className="show-more">
                    <h3>Show more </h3>
            </div>
           </div>
        </div>
        <div className="textfooter">  
             <p>Terms of Service Pivacy Policy Cookie Policy</p>
            <p> Imprint Ads info More...@2021 Twitter,Inc.</p> 
        
        </div>
            
          
        
        </div>

    )
}