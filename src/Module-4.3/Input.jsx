import { Fragment } from "react"
import { forwardRef } from "react"

const Input=function (props,ref){
    return (
        <Fragment>
            <input {...props} ref={ref}
                className="border-2 border-black p-1"
                type="text" name="" id=""
            />



        </Fragment>
    )
}
const forwardInput=forwardRef(Input)
export default forwardInput