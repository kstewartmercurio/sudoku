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
    navbarAccentColor,
    topButtonBarAccentColor
]
["red", "blue", "green", "purple", "orange", "yellow", "pink", "black"]

    - initial square text dark, regular square text light
*/

// ["#04052e", "#abb0ab", "#080a5e", "#58a3f3", "#2c00a3", "#4e5a8d", "#80b0ff8f", "#eee5dd"]
// ["#04052e", "#abb0ab", "#58a3f3", "#eee5dd", "#080a5e", "#80b0ff8f", "#4e5a8d", "#2c00a3"]

export const themeVals = [
    ["xanadu", ["#758173", "#344634", "#064507", "#cad1cb", "#626c60", 
        "a5a5a575", "#498349", "#a9c5a0", "#a9c5a0", "#eff8f0"]],
    ["harvest gold", ["#d79233", "#3a5c69", "#bfc3c8", "#694f1f", "#aa7122", 
        "#ad9b28d6", "#b45e2d", "#dda445", "#cacaca", "#e7e7e7"]],
    ["antique brass", ["#ce826f", "#66674e", "#395948", "#bebfb7", "#966d5d", 
        "#528964b3", "#5a3d3d", "#d26e59", "#985713", "#eff8f0"]],
    ["oxford blue", ["#04052e", "#a7a9cc", "#5a5a68", "#eee5dd", "#080a5e", 
        "#80b0ff4a", "#6960eb", "#2c00a3", "#8082d0", "#151515"]],
    ["brunswick green", ["#28524a", "#edd2fb", "#519085", "#ffffff", "#3d7b6f",
        "#90c6cb", "#f8a2ff87", "#2f3437", "#5d995f"]]
]