import React from "react";

import {themeVals} from "./themesList";

export function Themes() {
    const updateTheme = (e, newTheme) => {
        e.preventDefault();

        const uglyVals = ["red", "blue", "green", "purple", "orange", 
            "yellow", "pink", "black", "white"];

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
        r.style.setProperty("--initialSquareColor", newThemeVals[3]);
        r.style.setProperty("--squareBackgroundColor", newThemeVals[4]);
        r.style.setProperty("--selectedSquareColor", newThemeVals[5])
        r.style.setProperty("--buttonColor", newThemeVals[6]);
        r.style.setProperty("--buttonBackgroundColor", newThemeVals[7]);
        r.style.setProperty("--navbarAccentColor", newThemeVals[8]);
        r.style.setProperty("--topButtonBarAccentColor", newThemeVals[9]);
    }

    return (
        <div id="theme-set">
            <button className="theme-btn" id="xanadu" onClick={(e) => {
                updateTheme(e, "xanadu")
            }}>
                xanadu
            </button>
            <button className="theme-btn" id="harvest-gold" onClick={(e) => {
                updateTheme(e, "harvest gold")
            }}>
                harvest gold
            </button>
            <button className="theme-btn" id="antique-brass" onClick={(e) => {
                updateTheme(e, "antique brass")
            }}>
                antique brass
            </button>
            <button className="theme-btn" id="oxford-blue" onClick={(e) => {
                updateTheme(e, "oxford blue")
            }}>
                oxford blue
            </button>
            <button className="theme-btn" id="brunswick-green" onClick={(e) => {
                updateTheme(e, "brunswick green")
            }}>
                brunswick green
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