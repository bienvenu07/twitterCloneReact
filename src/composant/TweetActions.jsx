import TweetAction from "./TweetAction"
import reply from "../assets/icon/iconblanc/Reply.svg"
import retweet from "../assets/icon/iconblanc/Retweet.svg"
import react from "../assets/icon/iconblanc/React.svg"
import share from "../assets/icon/iconblanc/Share.svg"

export default function TweetActions(props){
    return (<div class="flex justify-center items-center gap-4 text-gray-500"> 

    
    <TweetAction icon={reply} Reply={props.actions.Reply}/>
    <TweetAction icon={retweet} Reply={props.actions.Retweet}/>
    <TweetAction icon={react} Reply={props.actions.React}/>
    <TweetAction icon={share} Reply={props.actions.Share}/>
    
    </div>)
}