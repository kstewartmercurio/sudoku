import React from "react";

import {Navbar} from "./navbar";
import {Board} from "./board";

export function BoardPage(props) {
    return (
        <div>  
            <Board seventeen={props.seventeen} blackout={props.blackout}
                tornado={props.tornado} swimTest={props.swimTest}/>
        </div>
    )
}