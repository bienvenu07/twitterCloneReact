
import TweetActions from "./TweetActions"
import TweetBody from "./TweetBody"

export default function TweetContent(props){
    return (<div className="flex flex-col items-start justify-start gap-6 w-full"> 
    
     <TweetBody body={props.tweet.content.body}/>
     <TweetActions actions={props.tweet.content.actions}/>
    </div>)
}