
import TweetAvatar from "./TweetAvatar";
import TweetContent from "./TweetContent";
// import {Context } from "../Context/TweetContext.js";

export default function Tweet({table}){
    return (<div className="flex items-start justify-start gap-4 px-4 py-6 border-b border-gray-200"> 
            <TweetAvatar tweet={table}/>
            <TweetContent tweet={table}/>
   
    </div>)
}


