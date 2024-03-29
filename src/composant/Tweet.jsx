
import TweetAvatar from "./TweetAvatar";
import TweetContent from "./TweetContent";

export default function Tweet(props){
    return (<div class="flex items-start justify-start gap-4 px-4 py-6 border-b border-gray-200"> 
            <TweetAvatar img={props.table.avatar}/>
            <TweetContent content={props.table.content}/>
     
    
    </div>)
}

