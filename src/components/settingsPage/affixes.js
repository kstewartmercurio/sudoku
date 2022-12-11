import React from "react";

export function Affixes() {
    return (
        <div id="affix-set">
            <div className="affix-wrapper">
                <p className="affix-subheader">
                    17 clue
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                </p>
                <p className="affix-p">
                    for when you want hard but hard's too easy.
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
                    changing all the 2s with all the 9s doesn't change anyting 
                    because the old puzzle and the new puzzle would be 
                    isomorphic. so why don't i shuffle things around for you; 
                    that'd be kind of me.
                </p>
            </div>
        </div>

        // <div id="affix-set">
        //     <p className="affix-p">stay tuned</p>
        // </div>
    )
}