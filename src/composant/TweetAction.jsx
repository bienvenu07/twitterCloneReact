
export default function TweetAction(props){

    return ( <div className= "flex items-center justify-center cursor-pointer ">

        <div className=" flex items-center justify-center cursor-pointer"> 
        

        <img className= "w-7 h-auto text-gray-900 cursor-pointer hover:bg-purple-700 "  src={props.icon} alt="" />
            <p className="hover:bg-blue-900">{props.Reply }
            
            </p>
        </div>
    </div>)
    
   
}
// "flex items-center justify-center gap-4"

// "bg-red-700"