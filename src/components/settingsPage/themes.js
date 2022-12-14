import React, {useState} from "react";

import {themeVals} from "./themesList";

export function Themes(props) {
    const [open, setOpen] = useState(true);

    const updateTheme = (e, newTheme) => {
        e.preventDefault();

        props.shareStoredTheme(newTheme);

        if (props.blackout === false) {
            updateThemeWithoutBlackout(newTheme);
        }
    }

    const updateThemeWithoutBlackout = (newTheme) => {
        let newThemeVals = [];
        for (let i = 0; i < themeVals.length; i++) {
            if (newTheme === themeVals[i][0]) {
                newThemeVals = themeVals[i];
                break;
            }
        }
        
        var r = document.querySelector(":root");
        r.style.setProperty("--backgroundColor", newThemeVals[1][0]);
        r.style.setProperty("--boardColor", newThemeVals[1][1]);
        r.style.setProperty("--squareColor", newThemeVals[1][2]);
        r.style.setProperty("--initialSquareColor", newThemeVals[1][3]);
        r.style.setProperty("--squareBackgroundColor", newThemeVals[1][4]);
        r.style.setProperty("--selectedSquareColor", newThemeVals[1][5])
        r.style.setProperty("--buttonColor", newThemeVals[1][6]);
        r.style.setProperty("--buttonBackgroundColor", newThemeVals[1][7]);
        r.style.setProperty("--navbarColor", newThemeVals[1][8])
        r.style.setProperty("--navbarAccentColor", newThemeVals[1][9]);
        r.style.setProperty("--topButtonBarSelectedColor", newThemeVals[1][10])
        r.style.setProperty("--topButtonBarHoverColor", newThemeVals[1][11]);

        r.style.setProperty("--welcomeColor1", newThemeVals[2][0]);
        r.style.setProperty("--welcomeColor2", newThemeVals[2][1]);
        r.style.setProperty("--welcomeColor3", newThemeVals[2][2]);

        r.style.setProperty("--settingsNavColor", newThemeVals[3][0]);
        r.style.setProperty("--settingsNavBackgroundColor", newThemeVals[3][1]);

        r.style.setProperty("--formColor", newThemeVals[4][0]);
        r.style.setProperty("--formBackgroundColor", newThemeVals[4][1]);
        r.style.setProperty("--formSubmitBackgroundColor", newThemeVals[4][2]);
        r.style.setProperty("--formSubmitBackgroundHoverColor", newThemeVals[4][3]);
    }

    const handleOpen = () => {
        setOpen(!open);
    }

    const getThemesDropdownTags = () => {
        if (open === true) {
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
                    <button className="theme-btn" id="french-violet" onClick={(e) => {
                        updateTheme(e, "french violet")
                    }}>
                        french violet
                    </button>
                    <button className="theme-btn" id="claret" onClick={(e) => {
                        updateTheme(e, "claret")
                    }}>
                        claret
                    </button>
                    <button className="theme-btn" id="sage" onClick={(e) => {
                        updateTheme(e, "sage")
                    }}>
                        sage
                    </button>
                </div>
            )
        } else {
            return null;
        }
    }

    return (
        <>
            <div className="dd-wrapper" id="theme-dd-wrapper">
                <button className="settings-dd" onClick={handleOpen}>
                    themes
                </button>
            </div>
            {getThemesDropdownTags()}
        </>
    )
}