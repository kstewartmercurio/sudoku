import React from "react";

export function Themes() {
    const updateTheme = (e, newTheme) => {
        e.preventDefault()
        console.log(newTheme);

        let newVal = [];
        // [backgroundColor, boardColor, squareColor, squareTextColor, buttonColor, buttonTextColor, selectedColor, initialSquareColor]
        switch (newTheme) {
            case "fleuriste":
                newVal = ["#c6b294", "#405a52", "#8a785b", "#64374d", "#b4a389",
                    "#091914", "#64374db9", "2e403b"];
                break;
            case "fledgling":
                break;
            case "passionfruit":
                newVal = ["#7c2142", "#c5a100", "#833c5e", "#9994b8", "#833c5e",
                    "#d8d8d8", "#9994b8b9", "#d8d8d8"];
                break;
            case "hedge":
                break;
            default:
                break;
        }

        var r = document.querySelector(":root");
        r.style.setProperty("--backgroundColor", newVal[0]);
        r.style.setProperty("--boardColor", newVal[1]);
        r.style.setProperty("--squareColor", newVal[2]);
        r.style.setProperty("--squareTextColor", newVal[3]);
        r.style.setProperty("--buttonColor", newVal[4]);
        r.style.setProperty("--buttonTextColor", newVal[5]);
        r.style.setProperty("--selectedColor", newVal[6]);
        r.style.setProperty("--initialSquareColor", newVal[7]);
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