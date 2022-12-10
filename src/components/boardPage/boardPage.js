import React from "react";

import {Navbar} from "./navbar";
import {Board} from "./board";
import {BottomBtnBar} from "./bottomBtnBar";

export function BoardPage(props) {
    const shareNavbarClick = (clickType) => {
        props.handleNavbarClick(clickType);
    }

    return (
        <>  
            <Navbar shareNavbarClick={shareNavbarClick}/>
            <Board/>
            <BottomBtnBar/>
        </>
    )
}