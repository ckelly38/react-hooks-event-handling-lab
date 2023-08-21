// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe()
{
    function myBlurListener(event)
    {
        console.log("Hey! Eyes on me!");
    }

    function myFocusListener(event)
    {
        console.log("Good!");
    }

    return <button id="mbtn" onFocus={myFocusListener} onBlur={myBlurListener}>Eyes on me</button>;
}

export default EyesOnMe;
