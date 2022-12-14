import React from "react";

export function NumBtnBar(props) {
    if (props.size === "6x6") {
        return (
            <div className="num-btn-bar">
                <div className="num-btn-bar-btn-grp">
                    <button className="num-btn-bar-btn" id="1-btn" onClick={(e) => {
                        props.shareNumClick(1);
                    }}>
                        1
                    </button>
                    <button className="num-btn-bar-btn" id="2-btn" onClick={(e) => {
                        props.shareNumClick(2);
                    }}>
                        2
                    </button>
                    <button className="num-btn-bar-btn" id="3-btn" onClick={(e) => {
                        props.shareNumClick(3);
                    }}>
                        3
                    </button>
                    <button className="num-btn-bar-btn" id="4-btn" onClick={(e) => {
                        props.shareNumClick(4);
                    }}>
                        4
                    </button>
                    <button className="num-btn-bar-btn" id="5-btn" onClick={(e) => {
                        props.shareNumClick(5);
                    }}>
                        5
                    </button>
                    <button className="num-btn-bar-btn" id="6-btn" onClick={(e) => {
                        props.shareNumClick(6);
                    }}>
                        6
                    </button>
                    <button className="num-btn-bar-btn" id="erase-btn" onClick={(e) => {
                        props.shareNumClick(0);
                    }}>
                        <i className="bi bi-eraser-fill"></i>
                    </button>
                </div>
            </div>
        )
    } else if (props.size === "9x9") {
        return (
            <div className="num-btn-bar">
                <div className="num-btn-bar-btn-grp">
                    <button className="num-btn-bar-btn" id="1-btn" onClick={(e) => {
                        props.shareNumClick(1);
                    }}>
                        1
                    </button>
                    <button className="num-btn-bar-btn" id="2-btn" onClick={(e) => {
                        props.shareNumClick(2);
                    }}>
                        2
                    </button>
                    <button className="num-btn-bar-btn" id="3-btn" onClick={(e) => {
                        props.shareNumClick(3);
                    }}>
                        3
                    </button>
                    <button className="num-btn-bar-btn" id="4-btn" onClick={(e) => {
                        props.shareNumClick(4);
                    }}>
                        4
                    </button>
                    <button className="num-btn-bar-btn" id="5-btn" onClick={(e) => {
                        props.shareNumClick(5);
                    }}>
                        5
                    </button>
                    <button className="num-btn-bar-btn" id="6-btn" onClick={(e) => {
                        props.shareNumClick(6);
                    }}>
                        6
                    </button>
                    <button className="num-btn-bar-btn" id="7-btn" onClick={(e) => {
                        props.shareNumClick(7);
                    }}>
                        7
                    </button>
                    <button className="num-btn-bar-btn" id="8-btn" onClick={(e) => {
                        props.shareNumClick(8);
                    }}>
                        8
                    </button>
                    <button className="num-btn-bar-btn" id="9-btn" onClick={(e) => {
                        props.shareNumClick(9);
                    }}>
                        9
                    </button>
                    <button className="num-btn-bar-btn" id="erase-btn" onClick={(e) => {
                        props.shareNumClick(0);
                    }}>
                        <i className="bi bi-eraser-fill"></i>
                    </button>
                </div>
            </div>
        )
    }
}