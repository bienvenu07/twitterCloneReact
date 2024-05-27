
import { useContext, useState } from "react"
import { TweetContext } from "./TweetContext"
import Data from "../data/data.json"

const TweetProvider = ( {children})=>{
    const [post ,setPost]= useState(Data);
    const [tweetData ,setTweetData]=useState(Data.tweets)
    return (
      <TweetContext.Provider value={{ post,setPost,tweetData,setTweetData}}>
             {children}
      </TweetContext.Provider>  
    )

}
export default TweetProvider