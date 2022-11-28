import React from "react";

import {Board9x9} from "./board9x9";
import {Navbar} from "./navbar";

export function BoardPage() {
    return (
        <>  
            <Navbar/>
            <Board9x9/>
        </>
    )
}