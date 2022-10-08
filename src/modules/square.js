import React from "react";

export function Square(props) {
    return (
        <button className="square" onKeyPress={props.onKeyPress}>
            {props.val}
        </button>
    );
}