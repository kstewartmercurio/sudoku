import React from "react";

export function BottomBar(props) {
    return (
        <div id="bottom-bar">
            <div id="bottom-bar-content">
                <button className="bottom-bar-btn" id="contact-btn" 
                    onClick={(e) => {
                    props.shareFormClick("contact");
                }}>
                    <i className="fa-solid fa-envelope" id="fa-mail"></i> contact
                </button>
                <button className="bottom-bar-btn" id="bug-btn"
                    onClick={(e) => {
                        props.shareFormClick("bug report");
                    }}>
                    <i className="fa-solid fa-bug" id="fa-bug"></i> bug report
                </button>
                <a className="bottom-bar-link" id="github-btn"
                    href="https://github.com/kstewartmercurio/sudoku" 
                    rel="noopener noreferrer" target="_blank">
                    <i className="fa-solid fa-code" id="fa-code"></i> github
                </a>
                <a className="bottom-bar-link" id="coffee-btn"
                    href="https://www.buymeacoffee.com/stewartmercurio"
                    rel="noopener noreferrer" target="_blank">
                    <i className="fa-solid fa-mug-hot" id="fa-coffee"></i> buy me a coffee
                </a>
            </div>
        </div>
    )
}