// Code Keypad Component Here
import React from "react";

function Keypad (){
    function myChangeListener(event)
    {
        console.log("Entering password...");
        console.log(event.target.value);
    }

    return (
        <div>
            <input id="mpass" type="password" onChange={myChangeListener} />
        </div>
    )
}

export default Keypad;
