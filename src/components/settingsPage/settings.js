import React, {useState} from "react";
import {Affixes} from "./affixes";
import {Themes} from "./themes";
import {themeVals} from "./themesList";

export function Settings() {
    const [activeSetting, setActiveSetting] = useState("affixes");

    const [seventeen, setSeventeen] = useState(false);
    const [blackout, setBlackout] = useState(false);
    const [tornado, setTornado] = useState(false);
    const [swimTest, setSwimTest] = useState(false);

    const [storedTheme, setStoredTheme] = useState("xanadu");

    const handleToggle = (affixType) => {
        switch (affixType) {
            case "17 clue":
                setSeventeen(!seventeen);
                break;
            case "blackout":
                if (blackout === false) {
                    toggleBlackoutStyling();
                }
                setBlackout(!blackout);
                break;
            case "tornado":
                setTornado(!tornado)
                break;
            case "swim test":
                setSwimTest(!swimTest);
                break;
            default:
                break;
        }
    }

    const toggleBlackoutStyling = () => {
        var r = document.querySelector(":root");
        if (blackout === false) {
            r.style.setProperty("--backgroundColor", "black");
            r.style.setProperty("--boardColor", "#525252");
            r.style.setProperty("--squareColor", "#cbcbcb");
            r.style.setProperty("--initialSquareColor", "#000000");
            r.style.setProperty("--squareBackgroundColor", "#313131");
            r.style.setProperty("--selectedSquareColor", "#c0c0c075");
            r.style.setProperty("--buttonColor", "#8c8c8c");
            r.style.setProperty("--buttonBackgroundColor", "#1f1f1f");
            r.style.setProperty("--navbarColor", "#383838");
            r.style.setProperty("--navbarAccentColor", "#959595");
            r.style.setProperty("--topButtonBarSelectedColor", "#ffffff");
            r.style.setProperty("--topButtonBarHoverColor", "#484848");

            r.style.setProperty("--welcomeColor1", "#cdcdcd");
            r.style.setProperty("--welcomeColor2", "#383838");
            r.style.setProperty("--welcomeColor3", "#959595");

            r.style.setProperty("--settingsNavColor", "#959595");
            r.style.setProperty("--settingsNavBackgroundColor", "#1f1f1f");
        } else {
            let storedThemeVals = [];
            for (let i = 0; i < themeVals.length; i++) {
                if (storedTheme === themeVals[i][0]) {
                    storedThemeVals = themeVals[i];
                    break;
                }
            }

            r.style.setProperty("--backgroundColor", storedThemeVals[1][0]);
            r.style.setProperty("--boardColor", storedThemeVals[1][1]);
            r.style.setProperty("--squareColor", storedThemeVals[1][2]);
            r.style.setProperty("--initialSquareColor", storedThemeVals[1][3]);
            r.style.setProperty("--squareBackgroundColor", storedThemeVals[1][4]);
            r.style.setProperty("--selectedSquareColor", storedThemeVals[1][5])
            r.style.setProperty("--buttonColor", storedThemeVals[1][6]);
            r.style.setProperty("--buttonBackgroundColor", storedThemeVals[1][7]);
            r.style.setProperty("--navbarColor", storedThemeVals[1][8])
            r.style.setProperty("--navbarAccentColor", storedThemeVals[1][9]);
            r.style.setProperty("--topButtonBarSelectedColor", storedThemeVals[1][10])
            r.style.setProperty("--topButtonBarHoverColor", storedThemeVals[1][11]);

            r.style.setProperty("--welcomeColor1", storedThemeVals[2][0]);
            r.style.setProperty("--welcomeColor2", storedThemeVals[2][1]);
            r.style.setProperty("--welcomeColor3", storedThemeVals[2][2]);

            r.style.setProperty("--settingsNavColor", storedThemeVals[3][0]);
            r.style.setProperty("--settingsNavBackgroundColor", storedThemeVals[3][1]);
            }

        setBlackout(!blackout);
    }

    const updateStoredTheme = (newTheme) => {
        console.log("updating stored theme to " + newTheme);
        setStoredTheme(newTheme);
    }

    const renderActiveSetting = () => {
        switch (activeSetting) {
            case "affixes":
                return <Affixes seventeen={seventeen} handleToggle={handleToggle}/>
            case "themes":
                return <Themes blackout={blackout} storedTheme={storedTheme} 
                    updateStoredTheme={updateStoredTheme}/>
            default:
                break;
        }
    }

    return (
        <>
            <div className="section" id="settings-page">
                <div id="settings-nav-column">
                    <button className="settings-nav-btn" id="affix-selector"
                        onClick={(e) => {
                            setActiveSetting("affixes");
                    }}>
                        affix
                    </button>
                    <button className="settings-nav-btn" id="theme-selector"
                        onClick={() => {
                            setActiveSetting("themes");
                    }}>
                        theme
                    </button>
                    <button className="settings-nav-btn" id="variant-selector"
                        onClick={() => {
                            setActiveSetting("variants");
                    }}>
                        variant
                    </button>
                </div>
                <div id="settings-content">
                    {renderActiveSetting()}
                </div>
            </div>
        </>
    )
}