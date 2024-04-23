import PageTitle from "./PageTitle"
import Toptweets from "./Toptweets"

export default function Header(){
    return (
    <div className="header px-4 py-6 flex items-center justify-between border-b border-gray-700">
        <PageTitle/>
        <Toptweets/>
    </div>
    )
}
