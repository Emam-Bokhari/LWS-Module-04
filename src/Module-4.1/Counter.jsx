import { Fragment } from "react"
import { useRef } from "react"
// import { useState } from "react"

export default function Counter() {
    console.log("Rendering...")
    let ref=useRef(0)
    // const [count, setCount] = useState(0)

    function handleClick() {
        ref.current=ref.current+1
        console.log("You clicked "+ ref.current+ " times!")
        // setCount((prevCount)=>prevCount+1)
        // console.log(count)
    }
    return (
        <Fragment>
            <button onClick={handleClick} >
                Click Me
            </button>
        </Fragment>
    )
}