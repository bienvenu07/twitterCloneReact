import TweetAction from "./TweetAction"
import reply from "../assets/icon/iconblanc/Reply.svg"
import retweet from "../assets/icon/iconblanc/Retweet.svg"
import react from "../assets/icon/iconblanc/React.svg"
import share from "../assets/icon/iconblanc/Share.svg"
import { useState } from "react"


export default function TweetActions(props){
    const[count,setCount] =useState(false )

    // // const handleincrement =()=>{
    // //     setCount(count - 1)
    // // }
    // const handleclicker= () => {
    //     setCount((prevCount) => prevCount + 1); 
    //   };

    const handleclick=()=>{
        
            setCount(!count);
    }
    console.log("text-run:" ,typeof(props.actions.Reply));
    return (<div className="flex items-center justify-center gap-20 text-gray-400 text-sm">
                
    <TweetAction icon={reply} Reply={props.actions.Reply}/>
    <TweetAction icon={retweet} Reply={props.actions.Retweet}/>
    
    <TweetAction icon={react} Reply={count? Number(props.actions.React)+1: props.actions.React}  />
    <button onClick={handleclick}>
        <svg
              className="w-4 h-4 mr-1"
              viewBox="0 0 5 5"
              fill="currentColor"
            >
            <path
                fillRule="evenodd"
                d="M10 5a1 1 0 00-1.414 1.414L13.586 11H3a1 1 0 00-1-1V9a1 1 0 001-1h10.586L8.586 5.586A1 1 0 007.172 7z"
                clipRule="evenodd"
              />
            </svg>
        </button> 

    
    



    <TweetAction icon={share} Reply={props.actions.Share}/>

    
    </div>)
    
}