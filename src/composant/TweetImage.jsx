import React from "react"

export default function TweetImage(props){
    console.log();
    return ( <div className=" rounded-[50px] w-full mb-2"> 
    <img className="w-full rounded-[50px] border border-gray-700"  src ={props.img && props.img}  />
    </div>)
}