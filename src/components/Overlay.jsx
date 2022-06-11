import React from "react";


function Overlay(props) {
    return <div className={`overlay ${props.show}`} onClick = {props.overlayHandler}  >{props.children}</div>
}
export default Overlay;