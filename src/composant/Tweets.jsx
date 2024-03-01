import Tweet from "./Tweet"
import TweetAvatar1 from "../assets/img/Tweetavatar1.svg"
import TweetAvatar2 from "../assets/img/Tweetavatar2.svg"
import TweetAvatar3 from "../assets/img/Tweetavatar3.svg"
import Tweetimage from "../assets/img/Tweetimage.svg"


export default function Tweets(){

    let tweets = [
        {
            "id": "1",
            "avatar": TweetAvatar1,
            "content":{
                "body":{
                    "title":{
                        "author":"CNN",
                        "detail": "@CNN",
                        "time": "7m"
                    },
                    "text":'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.',
                    "image":""
                },
                "actions":{
                    "Reply":"57",
                    "Retweet":"144",
                    "React":"184",
                    "Share":""
                }
            }
        },
        {
            "id": "2",
            "avatar": TweetAvatar2,
            "content":{
                "body":{
                    "title":{
                        "author":"The New Your Times",
                        "detail": "@nytime",
                        "time": "2h"
                    },
                    "text":'Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land',
                    "image":Tweetimage
                },
                "actions":{
                    "Reply":"57",
                    "Retweet":"144",
                    "React":"184",
                   
                }
            }
        },

        { "id": "3", 
            "avatar": TweetAvatar3,
             "content":{
               "body":{
                "title":{
                    "author":"Twetter",
                    "detail": "@twitter",
                    "time": "oct 29"
                },
                "text":'BIG NEWS js  still twitter',
            },
                "actions":{
                    "Reply":"6.8K",
                    "Retweet":"36.6",
                    "React":"267.1",
                    
                }
            }

    },
   {
    "id": "4",
            "avatar": TweetAvatar3,
            "content":{
                "body":{
                    "title":{
                        "author":"Twitter",
                        "detail": "@nytime",
                        "time": "2h"
                    },
                    "text":'Hello literally Everyone',
                    
                },
                "actions":{
                    "Reply":"118.7",
                    "Retweet":"785.4",
                    "React":"3.3",
                  
                }
            }

   },

  {
    "id": "5",
    "avatar": TweetAvatar3,
    "content":{
        "body":{
            "title":{
                "author":"Twitter",
                "detail": "@nytime",
                "time": "Octob 01"
            },
            "text":'Hello literally Eeryone',
            "image":Tweetimage
        },
        "actions":{
            "Reply":"57",
            "Retweet":"144",
            "React":"184",
         
        }
    }

     },


    ]

    return ( <div className="tweets"> 
     {tweets.map((element)=> <Tweet key={element.id} table={element} />)}
    
    </div>)
}