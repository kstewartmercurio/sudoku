import React from "react";

import {Board} from "./board";
import {Navbar} from "./navbar";

export function BoardPage(props) {
    const shareNavbarClick = (clickType) => {
        props.handleNavbarClick(clickType);
    }

    return (
        <>  
            <Navbar shareNavbarClick={shareNavbarClick}/>
            <Board/>
        </>
    )
}