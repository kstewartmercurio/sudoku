import React from "react";

/*
17 clue - only 17 initial squares, the minimum required for a unique solution
blackout - blackout theme, hover over a square to see its value
tornado - every n moves switch all six/nine x value squares and all six/nine y
    value squares
swim test - start with the initial squares, initial square values disappear
    after making the first move and puzzle must be completed without seeing
    initial values
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

    const getBlackoutInputTag = () => {
        if (props.blackout === true) {
            return <input type="checkbox" onChange={(e) => {
                props.handleToggle("blackout");
            }} checked/>
        } else {
            return <input type="checkbox" onChange={(e) => {
                props.handleToggle("blackout");
            }}/>
        }
    }

    const getTornadoInputTag = () => {
        if (props.tornado === true) {
            return <input type="checkbox" onChange={(e) => {
                props.handleToggle("tornado");
            }} checked/>
        } else {
            return <input type="checkbox" onChange={(e) => {
                props.handleToggle("tornado");
            }}/>
        }
    }

    const getSwimTestInputTag = () => {
        if (props.swimTest === true) {
            return <input type="checkbox" onChange={(e) => {
                props.handleToggle("swim test");
            }} checked/>
        } else {
            return <input type="checkbox" onChange={(e) => {
                props.handleToggle("swim test");
            }}/>
        }
    }

    return (
        <div id="affix-set">
            <div className="affix-wrapper">
                <p className="affix-subheader">
                    17 clue
                    <label className="switch">
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
                        {getBlackoutInputTag()}
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
                        {getTornadoInputTag()}
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
                        {getSwimTestInputTag()}
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
    )
}