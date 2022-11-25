import React from "react";

import {themeVals} from "./themesList";

export function Themes() {
    const updateTheme = (e, newTheme) => {
        e.preventDefault();

        const uglyVals = ["red", "blue", "green", "purple", "orange", 
            "yellow", "pink", "black"];

        let newThemeVals = [];
        for (let i = 0; i < themeVals.length; i++) {
            if (newTheme === themeVals[i][0]) {
                newThemeVals = themeVals[i][1];
                break;
            }
        }
        console.log(newThemeVals);

        if (newThemeVals.length === 0) {
            newThemeVals = uglyVals;
        }
        
        var r = document.querySelector(":root");
        r.style.setProperty("--backgroundColor", newThemeVals[0]);
        r.style.setProperty("--boardColor", newThemeVals[1]);
        r.style.setProperty("--squareColor", newThemeVals[2]);
        r.style.setProperty("--squareTextColor", newThemeVals[3]);
        r.style.setProperty("--buttonColor", newThemeVals[4]);
        r.style.setProperty("--buttonTextColor", newThemeVals[5]);
        r.style.setProperty("--selectedColor", newThemeVals[6]);
        r.style.setProperty("--initialSquareColor", newThemeVals[7]);
    }

    return (
        <div id="theme-set">
            <button className="theme-btn" id="manatee" onClick={(e) => {
                updateTheme(e, "manatee")
            }}>
                manatee
            </button>
            <button className="theme-btn" id="antique-brass" onClick={(e) => {
                updateTheme(e, "antique brass")
            }}>
                antique brass
            </button>
            <button className="theme-btn" id="comet" onClick={(e) => {
                updateTheme(e, "comet")
            }}>
                comet
            </button>
            <button className="theme-btn" id="gulf-stream" onClick={(e) => {
                updateTheme(e, "gulf stream")
            }}>
                gulf stream
            </button>
            <button className="theme-btn" id="test" onClick={(e) => {
                updateTheme(e, "test")
            }}>
                test
            </button>
            <button className="theme-btn" id="test" onClick={(e) => {
                updateTheme(e, "test")
            }}>
                test
            </button>
            <button className="theme-btn" id="test" onClick={(e) => {
                updateTheme(e, "test")
            }}>
                test
            </button>
            <button className="theme-btn" id="test" onClick={(e) => {
                updateTheme(e, "test")
            }}>
                test
            </button>
        </div>
    )
}