import React from "react";

/*
17 clue - only 17 initial squares, the minimum required for a unique solution
blackout - blackout theme, hover over a square to see its value
tornado - every n moves switch all six/nine x value squares and all six/nine y
    value squares
swim test - start with the initial squares, everything disappears after the
    first move is made and the puzzle must be solved in your head
*/

export function Affixes(props) {
    const getSeventeenInputTag = () => {
        if (props.seventeen === true) {
            return <input type="checkbox" onChange={(e) => {
                props.handleToggle("17 clue");
            }} checked/>
        } else {
            return <input type="checkbox" onChange={(e) => {
                props.handleToggle("17 clue");
            }}/>
        }
    }

    return (
        <div id="affix-set">
            <div className="affix-wrapper">
                <p className="affix-subheader">
                    17 clue
                    <label className="switch">
                        {/* <input type="checkbox" onInput={(e) => {
                            props.handleToggle("17 clue");
                        }}/> */}
                        {getSeventeenInputTag()}
                        <span className="slider round"></span>
                    </label>
                </p>
                <p className="affix-p">
                    in order for a 9x9 puzzle to have a unique solution you 
                    must start with at least 17 squares. consider this the 
                    option for when you want hard but hard's too easy.
                </p>
            </div>
            <div className="affix-wrapper">
                <p className="affix-subheader">
                    blackout
                    <label className="switch">
                        <input type="checkbox" onInput={(e) => {
                            props.handleToggle("blackout");
                        }}/>
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
                        <input type="checkbox" onInput={(e) => {
                            props.handleToggle("tornado");
                        }}/>
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
                        <input type="checkbox" onInput={(e) => {
                            props.handleToggle("swim test");
                        }}/>
                        <span className="slider round"></span>
                    </label>
                </p>
                <p className="affix-p">
                    dolphins can remember the whistles of their friends and tank
                    mates for over 20 years. perhaps your memory can compare?
                    i'd adivse that you not forget to remember.
                </p>
            </div>
        </div>

        // <div id="affix-set">
        //     <p className="affix-p">stay tuned</p>
        // </div>
    )
}