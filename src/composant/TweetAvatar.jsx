import React, { useContext } from "react"
import { TweetContext } from "../context/Tweetcontext"

export default function TweetAvatar(){
     const avata=useContext(TweetContext)
     console.log(avata)
    return (<div>
         <img src ={avata.avatar} class="w-15 h-15 rounded-full mr-4"/>
        
    </div>)
   
    
}