import React from "react";

export function Navbar(props) {
    return (
        <div id="board-page-navbar">
            <p id="logo">You<span id="logo-accent">Do</span>Sudoku</p>
            <div id="board-page-nav-btn-bar">
                <a className="board-page-nav-btn" 
                    href="https://github.com/kstewartmercurio/sudoku" 
                    rel="noopener noreferrer" target="_blank">
                    <i className="fa-solid fa-code"></i>
                </a>
                <button className="board-page-nav-btn" id="info-btn" 
                    onClick={(e) => {
                    props.shareNavbarClick("info");
                }}>
                    <i className="fa-solid fa-info"></i>
                </button>
                <button className="board-page-nav-btn" id="settings-btn"
                    onClick={(e) => {
                    props.shareNavbarClick("settings");
                }}>
                    <i className="bi bi-gear-fill"></i>
                </button>
            </div>
        </div>
    )
}