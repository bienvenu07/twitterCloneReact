
import TweetImage from "./TweetImage"
import TweetText from "./TweetText"
import TweetTitle from "./TweetTitle"

export default function TweetBody(props){
    return ( <div class="flex flex-col gap-1"> 
    <TweetTitle title={props.body.title} />
    <TweetText text={props.body.text} />
   { props.body.image && <TweetImage img={props.body.image}/>}
    

    </div>)
}