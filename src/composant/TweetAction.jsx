
export default function TweetAction(props){
    console.log(props.icon);
    return (<div class="flex items-center justify-center gap-4"> 

    <img src={props.icon} alt="" />
    <p>{props.Reply}</p>
    </div>)
}