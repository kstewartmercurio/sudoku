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

// ["#28524a", "#edd2fb", "#519085", "#ffffff", "#3d7b6f", "#90c6cb", "#f8a2ff87", "#2f3437"]
// ["#28524a", "#edd2fb", "fffffff", "#2f3437", "#519085", "#f8a2ff87", "#90c6cb", "#3d7b6f"]

export const themeVals = [
    ["xanadu", ["#758173", "#344634", "#064507", "#cad1cb", "#626c60", 
        "a5a5a575", "#498349", "#a9c5a0", "#a9c5a0", "#eff8f0"]],
    ["harvest gold", ["#d79233", "#3a5c69", "#bfc3c8", "#694f1f", "#aa7122", 
        "#ad9b28d6", "#b45e2d", "#dda445", "#cacaca", "#e7e7e7"]],
    ["antique brass", ["#ce826f", "#66674e", "#395948", "#bebfb7", "#966d5d", 
        "#528964b3", "#5a3d3d", "#d26e59", "#985713", "#eff8f0"]],
    ["oxford blue", ["#04052e", "#a7a9cc", "#8585f9", "#eee5dd", "#080a5e", 
        "#80b0ff4a", "#6960eb", "#2c00a3", "#8082d0", "#151515"]],
    ["brunswick green", ["#28524a", "#edd2fb", "#2e5b42", "#dfdfdf", "#519085",
        "#f8a2ff87", "#90c6cb", "#3d7b6f", "#37894b", "#ececec"]],
    ["french violet", ["#732fc6", "#c6e28d", "#d5f2e8", "#5c236c", "#a663cc", 
        "#89ca5396", "#c162ff", "#8b2ae2", "#c753f1", "#f6d6f0"]],
    ["claret", ["#841f44", "#bfada3", "#f0adad", "#400505", "#a52755", 
        "#5902025c", "#b05d5d", "#9e0255", "#fff2f2", "#482603"]],
    ["sage", ["#b3af8f", "#0a6650", "#136b4a", "#cadbd4", "#9c966d", 
        "#27a48c63", "#0e8382", "#9aae81", "#cadbd4", "#e3f8f0"]]
]