import React from "react";

export function Welcome() {
    return (
        <>
            <div className="section" id="welcome-page">
                <div id="welcome-header">
                    <p id="header-line-1">
                        i make, <span id="header-u">u </span><span id="header-do">do</span>
                    </p>
                    <p id="header-line-2">
                        we love <span id="header-sudoku">sudoku</span>
                    </p>
                </div>

                <p id="p1">welcome to my sudoku app! i've made this web app for
                    you to play sudoku. the board above allows you to play
                    puzzles at whatever difficulty you'd like and there's extra
                    functionality for making notes, getting hints, timing
                    yourself, solving the puzzle, generating new puzzles, and
                    clearing the board.
                </p>
            </div>
        </>
    )
}