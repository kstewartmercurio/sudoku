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

                <div id="welcome-content">
                    <p className="subheader">project overview</p>
                    <p id="p1">
                        welcome to my sudoku app! i've made this web app for
                        you to play sudoku. the board above allows you to play
                        puzzles at whatever difficulty you'd like and there's extra
                        functionality for making notes, getting hints, timing
                        yourself, solving the puzzle, generating new puzzles, and
                        clearing the board.
                    </p>
                    <p className="subheader">tools used</p>
                    <p id="p2">
                        i used HTML, CSS, and JavaScript for the frontend
                        design, npm for package management, Bootstrap for 
                        button icons, and Git for version control.
                    </p>
                    <div id="icon-bar">
                        this is where icons will go
                    </div>
                    <p id="p3">
                        additionally, i used Coolors to generate color palletes
                        for themes, uglkjgj's sudoku board api for puzzle
                        generation, and monkeytype's website for design
                        inspiration.
                    </p>
                </div> 
            </div>
        </>
    )
}