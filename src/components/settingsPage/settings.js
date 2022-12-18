import React, {useEffect} from "react";
import {Affixes} from "./affixes";
import {Sounds} from "./sounds";
import {Themes} from "./themes";
import {themeVals} from "./themesList";

export function Settings(props) {
    useEffect(() => {
        var r = document.querySelector(":root");
        r.style.setProperty("--bottomBarBackgroundColor", "transparent");
        return () => {
            var rs = getComputedStyle(r);
            let bgColor = rs.getPropertyValue("--bottomBarBackgroundColor");
            r.style.setProperty("--bottomBarBackgroundColor", bgColor);
        }
    })

    const handleAffixToggle = (affixType) => {
        switch (affixType) {
            case "17 clue":
                props.shareAffixStatus("17 clue", props.seventeen);
                break;
            case "blackout":
                props.shareAffixStatus("blackout", props.blackout);
                toggleBlackoutStyling();
                break;
            case "tornado":
                props.shareAffixStatus("tornado", props.tornado);
                break;
            case "swim test":
                props.shareAffixStatus("swim test", props.swimTest);
                break;
            default:
                break;
        }
    }

    const toggleBlackoutStyling = () => {
        var r = document.querySelector(":root");
        if (props.blackout === false) {
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
            
            r.style.setProperty("--formColor", "#c3c3c3");
            r.style.setProperty("--formBackgroundColor", "#191919");
            r.style.setProperty("--formSubmitBackgroundColor", "#194b00");
            r.style.setProperty("--formSubmitBackgroundHoverColor", "#133a00")
        } else {
            let storedThemeVals = [];
            for (let i = 0; i < themeVals.length; i++) {
                if (props.storedTheme === themeVals[i][0]) {
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

            r.style.setProperty("--formColor", storedThemeVals[4][0]);
            r.style.setProperty("--formBackgroundColor", storedThemeVals[4][1]);
            r.style.setProperty("--formSubmitBackgroundColor", storedThemeVals[4][2]);
            r.style.setProperty("--formSubmitBackgroundHoverColor", storedThemeVals[4][3])
        }
    }

    return (
        <>
            <div className="section" id="settings-page">
                <div id="settings-content">
                    <Affixes seventeen={props.seventeen} 
                    blackout={props.blackout} tornado={props.tornado} 
                    swimTest={props.swimTest} 
                    handleAffixToggle={handleAffixToggle}/>
                    <Sounds activeSound={props.activeSound}
                        shareActiveSound={props.shareActiveSound}/>
                    <Themes blackout={props.blackout}
                    shareStoredTheme={props.shareStoredTheme}/>
                </div>
            </div>
        </>
    )
}