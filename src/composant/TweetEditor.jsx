import Avatar from "./Avatar"
import TweetEditorForm from "./TweetEditorForm"

export default function TweetEditor(){
    return (
    <div className="flex flex-col gap-4 px-4 py-1 border-b border-gray-700">
        <Avatar/> 
        <TweetEditorForm/>
         </div>
         )
}