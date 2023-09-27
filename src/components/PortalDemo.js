<<<<<<< HEAD
import React from "react";
import  ReactDOM  from "react-dom";

function PortalDemo(){
    return ReactDOM.createPortal(
        <h1>Portal Demo</h1>, 
        document.getElementById("portal-root")
=======
import React from 'react'
import  ReactDOM  from 'react-dom';

function PortalDemo(){
    return ReactDOM.createPortal(
        <h1>
            Portal Demo
        </h1>, 
        document.getElementById('portal-root')
>>>>>>> 498e7d988f3cd0d1d4acd17962fa049d9aeef24f
    );
}
export default PortalDemo