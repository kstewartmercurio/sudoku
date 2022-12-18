import React, {useEffect} from "react";

export function Navbar(props) {
    useEffect(() => {
        if (props.activePage === "settings") {
            var r = document.querySelector(":root");
            r.style.setProperty("--navbarBackgroundColor", "transparent");

            return () => {
                var rs = getComputedStyle(r);
                let nbgColor = rs.getPropertyValue("--navbarBackgroundColor");
                r.style.setProperty("--navbarBackgroundColor", nbgColor);
            }
        }
    })

    const getBackButtonTag = () => {
        if (props.activePage !== "board") {
            return <button className="nav-btn" id="back-btn"
                onClick={(e) => {
                props.shareNavbarClick("board");
            }}>
                <i className="fa-solid fa-arrow-left"></i>
            </button>
        } else {
            return null;
        }
    }

    return (
        <div id="board-page-navbar">
            <div id="nav-left">
                <button id="logo-button-wrapper" onClick={(e) => {
                    props.shareNavbarClick("board");
                }}>
                    <p id="logo">You<span id="logo-accent">Do</span>Sudoku</p>
                </button>
            </div>
            <div id="nav-right">
                {getBackButtonTag()}
                {/* <a className="board-page-nav-btn" 
                    href="https://github.com/kstewartmercurio/sudoku" 
                    rel="noopener noreferrer" target="_blank">
                    <i className="fa-solid fa-code"></i>
                </a> */}
                <button className="nav-btn" id="info-btn" 
                    onClick={(e) => {
                    props.shareNavbarClick("info");
                }}>
                    <i className="fa-solid fa-info"></i>
                </button>
                <button className="nav-btn" id="settings-btn"
                    onClick={(e) => {
                    props.shareNavbarClick("settings");
                }}>
                    <i className="bi bi-gear-fill"></i>
                </button>
            </div>
        </div>
    )
}