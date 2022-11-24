import React from "react";

export function Themes() {
    const updateTheme = (e, newTheme) => {
        e.preventDefault()
        console.log(newTheme);

        let newVal = [];
        switch (newTheme) {
            case "fleuriste":
                newVal = ["#c6b294", "#405a52", "#8a785b", "#64374d", "#b4a389",
                    "#091914", "#64374db9", "2e403b"];
                break;
            case "fledgling":
                break;
            case "passionfruit":
                newVal = ["#7c2142"];
                break;
            case "hedge":
                break;
            default:
                break;
        }

        var r = document.querySelector(":root");
        r.style.setProperty("--backgroundColor", newVal[0]);
    }

    return (
        <div id="theme-set">
            <button className="theme-btn" id="fleuriste" onClick={(e) => {
                updateTheme(e, "fleuriste")
            }}>
                fleuriste
            </button>
            <button className="theme-btn" id="fledgling" onClick={(e) => {
                updateTheme(e, "fledgling")
            }}>
                fledgling
            </button>
            <button className="theme-btn" id="passionfruit" onClick={(e) => {
                updateTheme(e, "passionfruit")
            }}>
                passionfruit
            </button>
            <button className="theme-btn" id="hedge" onClick={(e) => {
                updateTheme(e, "hedge")
            }}>
                hedge
            </button>
        </div>
    )
}