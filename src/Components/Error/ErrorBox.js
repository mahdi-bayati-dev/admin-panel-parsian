import React from "react";
import './ErrorBox.css'
function ErrorBox({msg}) {
    return ( 
        <>
        <p className="errorBox">
            {msg}
        </p>
        </>
     );
}

export default ErrorBox;