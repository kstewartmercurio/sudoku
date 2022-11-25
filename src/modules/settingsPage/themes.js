import React from "react";

export function Themes() {
    const updateTheme = (e, newTheme) => {
        e.preventDefault();

        let newVal = [];
        const uglyVal = ["red", "blue", "green", "purple", "orange", "yellow", 
            "pink", "brown"];
        switch (newTheme) {
            case "manatee":
                newVal = ["#9c9c9e", "#5d5e6f", "#4c4b58", "#c7c6c6", "#848484",
                    "#262636", "#e1992f3d", "#cbad7f"];
                break;
            case "antique brass":
                newVal = ["#ce826f", "#777868", "#a17878", "#5f5f53", "#d26e59",
                    "#5a3d3d", "#825289cc", "#e9ebe0"];
                break;
            case "comet":
                newVal = ["#636583", "#a374e2", "#5e5990", "#d6d6d6", "#5e5990",
                "#e8e8e8", "#fe879cbf", "#353535"];
                break;
            case "comet":
                newVal = uglyVal;
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
            <button className="theme-btn" id="test" onClick={(e) => {
                updateTheme(e, "test")
            }}>
                test
            </button>
        </div>
    )
}