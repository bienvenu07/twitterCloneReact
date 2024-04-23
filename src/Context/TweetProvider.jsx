
import { useContext, useState } from "react"
import { TweetContext } from "./TweetContext"
import data from "../data/data.json"

const TweetProvider = ( {children})=>{
    const{data}=useContext(TweetContext);
    const []= useState();
    return (
      <TweetContext.Provider value={{data}}>
             {children}
      </TweetContext.Provider>  
    )

}
export default TweetProvider