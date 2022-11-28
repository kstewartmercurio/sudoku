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
                        design, npm for package management, Bootstrap and Font 
                        Awesome for button icons, and Git for version control.
                    </p>
                    <div id="icon-bar">
                        <i className="fa-brands fa-html5"></i>
                        <i className="fa-brands fa-css3-alt"></i>
                        <i className="fa-brands fa-square-js"></i>
                        <i className="fa-brands fa-react"></i>
                        <i className="fa-brands fa-npm"></i>
                        <i className="fa-brands fa-bootstrap"></i>
                        <i className="fa-solid fa-font-awesome"></i>
                        <i className="fa-brands fa-git"></i>
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