import Header from "./Header"
import TweetEditor from "./TweetEditor"
import Tweets from "./Tweets"


export default function Timeline1(){
    return <div class="flex-grow-0 basis-800 px:w-1/2 border border-gray-700 font-inter">
        <Header/>
        <TweetEditor/>
        <Tweets/>
        
    </div>
}