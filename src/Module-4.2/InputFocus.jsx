import { Fragment } from "react"
import { useRef } from "react"

export default function InputFocus() {

    const focusRef=useRef(null)

    function handleFocus(){
        focusRef.current.focus()
    }

    return (
        <Fragment>

            <input 
            ref={focusRef}
            className="border-2 border-gray-500 p-1 rounded-md" type="text" placeholder="Enter Your Name" />

            <button 
            onClick={handleFocus}
            className="text-white bg-blue-500 px-3 py-2 rounded-md ml-5">
                Click Here
            </button>
        </Fragment>
    )
}