/*
OLD [backgroundColor, boardColor, squareColor, squareTextColor, buttonColor,
    buttonTextColor, selectedColor, initialSquareColor]
NEW [backgroundColor (same), 
    boardColor (same), 
    squareColor (old squareTextColor),
    initialSquareColor (same),
    squareBackgroundColor (old squareColor),
    selectedSquareColor (old selectedColor),
    buttonColor (old buttonTextColor),
    buttonBackgroundColor (old buttonColor),
    topButtonBarAccentColor
]
["red", "blue", "green", "purple", "orange", "yellow", "pink", "black"]

    - initial square text dark, regular square text light
*/

// ["#ce826f", "#66674e", "#966d5d", "#395948", "#d26e59", "#5a3d3d", "#528964b3", "#bebfb7", "#b5c7b7"]
// ["#ce826f", "#66674e", "#395948", "#bebfb7", "#966d5d", "#528964b3", "#5a3d3d", "#d26e59", "red"]

export const themeVals = [
    ["xanadu", ["#758173", "#344634", "#064507", "#cad1cb", "#626c60", 
        "a5a5a575", "#498349", "#a9c5a0", "#a9c5a0", "#eff8f0"]],
    ["antique brass", ["#ce826f", "#66674e", "#395948", "#bebfb7", "#966d5d", 
        "#528964b3", "#5a3d3d", "#d26e59", "#985713", "#eff8f0"]],
    ["comet", ["#636583", "#a374e2", "#5e5990", "#d6d6d6", "#5e5990",
        "#e8e8e8", "#fe879c80", "#3c0d64", "#4c2a69"]],
    ["gulf stream", ["#78b2ae", "#5967c3", "#54928e", "#cc9600", "#b0b9ac",
        "#4d4d4d", "#ffee846e", "#e3e3e3", "#bfa134"]],
    ["harvest gold", ["#d79233", "#3a5c69", "#aa7122", "#92bef4", "#dda455", 
        "#b45e2d", "#ad9b28d6", "#2b2b2b", "#70513b"]],
    ["oxford blue", ["#04052e", "#abb0ab", "#080a5e", "#58a3f3", "#2c00a3",
        "#4e5a8d", "#80b0ff8f", "#eee5dd", "#5455d5"]],
    ["brunswick green", ["#28524a", "#edd2fb", "#519085", "#ffffff", "#3d7b6f",
        "#90c6cb", "#f8a2ff87", "#2f3437", "#5d995f"]]
]