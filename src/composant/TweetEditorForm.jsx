import TweetEditorInput from "./TweetEditorInput"
import TweetEditorButtons from "./TweetEditorButtons"

export default function TweetEditorForm(){
    return (<div class="flex-shrink"> 
        <TweetEditorInput/>
        <TweetEditorButtons/>
    </div>)
}