import TweetEditorInput from "./TweetEditorInput"
import TweetEditorButtons from "./TweetEditorButtons"


// les dependants
// import{Context} from "react";
import { TweetContext } from "../Context/TweetContext";
import { useForm } from "react-hook-form";
import { useContext,useState } from "react";

// les axios....
import axios from "axios";



export default function TweetEditorForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [donne,setData] =useContext(TweetContext); 

    const onSubmit = (dataFrom) => {
        const secondTweet = {
            user: current,
            content: dataFrom,
            actions: {
                comments: 0,
                retweet: 0,
                like: 0,
                state: true,
            },
        };
        axios
        .post("http://localhost:3000/tweets", secondTweet)
        .then((response) => {
            setData([...tweets, response.data]);
        })
        .catch((error) => console.error(error))
        reset();





    return (
    <form  onSubmit={handleSubmit(onSubmit)} className="flex-shrink"> 
        <TweetEditorInput register={register}/>
        {
            errors.text &&(
                <p className="text-red-600 italic">{errors.text.message}</p>
            )
        }
        <TweetEditorButtons/>
    </form>
    );
  }; 
}