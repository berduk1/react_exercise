import React from "react";
import FRParentInput from "./FRParentInput";

const FRInput = React.forwardRef((props, ref) => {
    return(
        <div>
            <input type="text" ref={ref}></input>
        </div>
    )
})
export default FRInput 