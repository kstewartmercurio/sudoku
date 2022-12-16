import React from "react";

export function BottomBar() {
    return (
        <div id="bottom-bar">
            <div id="bottom-bar-content">
                <a className="bottom-bar-btn" id="github-btn"
                    href="https://github.com/kstewartmercurio/sudoku" 
                    rel="noopener noreferrer" target="_blank">
                    <i className="fa-solid fa-code" id="fa-code"></i> github
                </a>
                <a className="bottom-bar-btn" id="coffee-btn"
                    href="https://www.buymeacoffee.com/stewartmercurio"
                    rel="noopener noreferrer" target="_blank">
                    <i className="fa-solid fa-mug-hot" id="fa-coffee"></i> buy me a coffee
                </a>
            </div>
        </div>
    )
}