import React from "react"

export default function TweetImage(props){
    console.log();
    return ( <div class=" rounded-[50px] w-full mb-2"> 
    <img class="w-full rounded-[50px] border border-gray-700"  src ={props.img && props.img}  />
    </div>)
}