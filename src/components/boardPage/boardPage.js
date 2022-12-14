import React from "react";

import {Navbar} from "./navbar";
import {Board} from "./board";

export function BoardPage(props) {
    const shareNavbarClick = (clickType) => {
        props.handleNavbarClick(clickType);
    }

    return (
        <div>  
            <Navbar shareNavbarClick={shareNavbarClick}/>
            <Board seventeen={props.seventeen} blackout={props.blackout}/>
        </div>
    )
}