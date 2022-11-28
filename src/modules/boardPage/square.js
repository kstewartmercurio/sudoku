import React from "react";

export function Square(props) {
    const idStr = "s" + props.idStr;

    if (props.sel === true) {
        return (
            <button className={props.className} id="selected"
            onClick={props.onClick} onKeyPress={props.onKeyPress}>
                {props.val}
            </button>
        )
    } else {
        return (
            <button className={props.className} id={idStr} 
            onClick={props.onClick} onKeyPress={props.onKeyPress}>
                {props.val}
            </button>
        );
    }
}