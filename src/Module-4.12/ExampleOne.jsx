import { Fragment } from "react"
import { useState } from "react"
import {useEffect} from "react"

export default function ExampleOne() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    // const [fullName,setFullName]=useState()

    // Redundant Bad code structure
    // useEffect(()=>{
    //     setFullName(firstName+" "+lastName)
    // },[firstName,lastName])

    // Good Structure
    const fullName=firstName+" "+lastName;

    return (
        <Fragment>
            <input
            onChange={(e)=>setFirstName(e.target.value)}
            className="border-2 border-black p-1 block"
            type="text" name="" id=""
            placeholder="Enter First Name"
            />
            <input 
            onChange={(e)=>setLastName(e.target.value)}
            className="border-2 border-black p-1 mt-5 block"
            type="text" name="" id=""
            placeholder="Enter Last Name"
            />
            <p>Full Name:{fullName}</p>
        </Fragment>
    )
}