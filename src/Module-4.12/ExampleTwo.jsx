import {Fragment} from "react"
import {useState} from "react"
// import {useEffect} from "react"

export default function ExampleTwo({userId}){

    const [comment,setComment]=useState("")

    // redundant and wrong/bad code structure
    // useEffect(()=>{
    //     setComment("")
    // },[userId])

    return(

        <Fragment>

            <h2>Profile ID:{userId}</h2>

            <input
            value={comment} 
            onChange={(e)=>setComment(e.target.value)}
            className="border-2 border-black"
            type="text" name="" id="" />

            <p>{comment}</p>

        </Fragment>

    )
}