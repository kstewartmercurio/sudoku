import React, {useState} from "react";

/*
17 clue - only 17 initial squares, the minimum required for a unique solution
blackout - blackout theme, hover over a square to see its value
tornado - every n moves switch all six/nine x value squares and all six/nine y
    value squares
swim test - start with the initial squares, everything disappears after the
    first move is made and the puzzle must be solved in your head
*/

export function Affixes() {
    const [seventeen, setSeventeen] = useState(false);

    const handleToggle = (affixType) => {
        switch (affixType) {
            case "17 clue":
                if (seventeen === false) {
                    console.log("activating 17 clue");
                    setSeventeen(true);
                } else {
                    setSeventeen(false);
                }
                break;
            
            default:
                break;
        }
    }

    return (
        <div id="affix-set">
            <div className="affix-wrapper">
                <p className="affix-subheader">
                    17 clue
                    <label className="switch">
                        <input type="checkbox" onInput={(e) => {
                            handleToggle("17 clue");
                        }}/>
                        <span className="slider round"></span>
                    </label>
                </p>
                <p className="affix-p">
                    in order to have a unique solution you must start with at
                    least 17 squares. consider this the option for when you
                    want hard but hard's too easy.
                </p>
            </div>
            <div className="affix-wrapper">
                <p className="affix-subheader">
                    blackout
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                </p>
                <p className="affix-p">
                    did you bring your flashlight?
                </p>
            </div>
            <div className="affix-wrapper">
                <p className="affix-subheader">
                    tornado
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                </p>
                <p className="affix-p">
                    changing all the 2s with all the 9s doesn't necessarily make
                    things harder because the old puzzle and the new puzzle
                    would be isomorphic. so why don't i shuffle things around
                    for you; that'd be kind of me. 
                </p>
            </div>
            <div className="affix-wrapper">
                <p className="affix-subheader">
                    swim test
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                </p>
                <p className="affix-p">
                    
                </p>
            </div>
        </div>

        // <div id="affix-set">
        //     <p className="affix-p">stay tuned</p>
        // </div>
    )
}