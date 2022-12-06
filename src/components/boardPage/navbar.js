import React from "react";

export function Navbar(props) {
    return (
        <div id="board-page-navbar">
            <p id="logo">u<span id="logo-accent">Do</span>Sudoku</p>
            <div id="board-page-nav-btn-bar">
                <button className="board-page-nav-btn" id="info-btn" 
                    onClick={(e) => {
                    props.shareNavbarClick("info");
                }}>
                    {/* <i className="bi bi-info-circle-fill"></i> */}
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