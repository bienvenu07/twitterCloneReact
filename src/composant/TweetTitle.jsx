import TweetTitleAuthor from "./TweetTitleAuthor"
import TweetTitleDetails from "./TweetTitleDetails"

export default function TweetTitle(props){
    return (
    <div class="flex items-center justify-start gap-2 text-lg"> 
    <TweetTitleAuthor author={props.title.author}/>
    <img src ="src/assets/icon/iconblanc/Verified.svg"/>
    <TweetTitleDetails detail={props.title.detail}/>
    <TweetTitleDetails detail="."/>
    <TweetTitleDetails detail={props.title.time} />

    
    </div>)
}