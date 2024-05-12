import { Fragment } from "react"
import { useRef } from "react"
import Input from "./Input"

export default function MyInput() {

    const myRef = useRef(null)

    function handleInputFocus() {
        myRef.current.focus()
    }

    return (
        <Fragment>
            <Input ref={myRef} placeholder="Enter Your Name" />
            <button
                onClick={handleInputFocus}
                className="bg-blue-500 text-white px-3 py-2 rounded-md text-base font-sans hover:bg-blue-600 transform transition-all" >
                Click Here
            </button>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam rerum delectus quasi, doloribus quia nulla est expedita laborum id distinctio libero rem ut ducimus sequi animi harum cum? Dolor, blanditiis.</p>
        </Fragment>
    )
}