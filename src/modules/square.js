import React from "react";

export function Square(props) {
    const idStr = "s" + props.idStr;

    return (
        <button className="square" id={idStr} onKeyPress={props.onKeyPress}
            onClick={props.onClick}>
            {props.val}
        </button>
    );
}