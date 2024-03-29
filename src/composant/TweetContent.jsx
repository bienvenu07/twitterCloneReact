
import TweetActions from "./TweetActions"
import TweetBody from "./TweetBody"

export default function TweetContent(props){
    return (<div class="flex flex-col items-start justify-start gap-6 w-full"> 
    
     <TweetBody body={props.content.body}/>
     <TweetActions actions={props.content.actions}/>
    </div>)
}