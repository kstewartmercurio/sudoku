import React from "react";

export function Square(props) {
    const idStr = "s" + props.idStr;

    if (props.sel === true) {
        return (
            <button className="square" id="selected" onKeyPress={props.onKeyPress}
                onClick={props.onClick}>
                {props.val}
            </button>
        )
    } else {
        return (
            <button className="square" id={idStr} onKeyPress={props.onKeyPress}
                onClick={props.onClick}>
                {props.idStr}
            </button>
        );
    }
}