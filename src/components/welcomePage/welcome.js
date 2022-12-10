import React from "react";

export function Welcome() {
    return (
        <>
            <div className="section" id="welcome-page">
                <div id="welcome-header">
                    <p id="header-line-1">
                        i make, <span id="header-u">you </span><span id="header-do">do</span>
                    </p>
                    <p id="header-line-2">
                        we love <span id="header-sudoku">sudoku</span>
                    </p>
                </div>

                <div id="welcome-content">
                    <p className="welcome-subheader">project overview</p>
                    <p id="p1">
                        welcome to my sudoku app! i've made this web app for
                        you to play sudoku in whatever way you wish. there are 
                        endless puzzles available and a multitude of 
                        customization options for you to enjoy your sudoku 
                        experience.
                    </p>
                    <p className="welcome-subheader">tools used</p>
                    <p id="p2">
                        i used HTML, CSS, JavaScript, and React for the frontend
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
                        additionally, i used a modified version of  an algorithm
                        written by Mark F. Graves Jr. to generate random
                        puzzles.
                    </p>
                </div> 
            </div>
        </>
    )
}