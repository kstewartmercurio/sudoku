import React from "react";

export function BottomBtnBar() {
    return (
        <div id="board-page-bottomBtnBar">
            <a className="bottomBtnBar-btn" href="www.github.com">
                github <i className="bi bi-code-slash"></i>
            </a>
            <button className="bottomBtnBar-btn">
                bug report <i className="bi bi-bug"></i>
            </button>
        </div>
    )
}