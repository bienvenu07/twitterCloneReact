import React, { useContext } from "react"

export default function TweetAvatar({tweet}){

    return (<div>
         <img src ={tweet.avatar} className="w-15 h-15 rounded-full mr-4"/>
        
    </div>)
   
    
}