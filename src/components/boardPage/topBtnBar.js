import React from "react";

export function TopBtnBar(props) {
    const getSizeButtonTags = () => {
        if (props.seventeen === true) {
            return <button className="top-btn-bar-btn" id="size9x9-btn-on" 
                onClick={(e) => {
                props.shareSize("9x9");
            }}>
                9x9
            </button>
        } else {
            let size6x6IdStr = "size6x6-btn-off";
            let size9x9IdStr = "size9x9-btn-off";
            if (props.size === "6x6") {
                size6x6IdStr = "size6x6-btn-on";
            } else {
                size9x9IdStr = "size9x9-btn-on";
            }

            return (
                <>
                    <button className="top-btn-bar-btn" id={size6x6IdStr} 
                        onClick={(e) => {
                        props.shareSize("6x6");
                    }}>
                        6x6
                    </button>
                    <button className="top-btn-bar-btn" id={size9x9IdStr} 
                        onClick={(e) => {
                        props.shareSize("9x9");
                    }}>
                        9x9
                    </button>
                </>
            )
        }
    }

    const getDifficultyButtonTags = () => {
        if (props.seventeen === true) {
            return <button className="top-btn-bar-btn" id="seventeen-clue-btn-on">
                17 clue
            </button>
        } else {
            let easyIdStr = "easy-btn";
            let mediumIdStr = "medium-btn";
            let hardIdStr = "hard-btn";
            if (props.difficulty === "easy") {
                easyIdStr = "active-difficulty-btn";
            } else if (props.difficulty === "medium") {
                mediumIdStr = "active-difficulty-btn";
            } else {
                hardIdStr = "active-difficulty-btn";
            }

            return (
                <>
                    <button className="top-btn-bar-btn" id={easyIdStr} 
                        onClick={(e) => {
                        props.shareDifficulty("easy");
                    }}>
                        easy
                    </button>
                    <button className="top-btn-bar-btn" id={mediumIdStr} 
                        onClick={(e) => {
                        props.shareDifficulty("medium");
                    }}>
                        medium
                    </button>
                    <button className="top-btn-bar-btn" id={hardIdStr} 
                        onClick={(e) => {
                        props.shareDifficulty("hard");
                    }}>
                        hard
                    </button>
                </>
            )
        }
    }

    const getGenerateButtonTag = () => {
        if (props.seventeen === true) {
            return <button className="top-btn-bar-btn" id="generate-btn"
                onClick={props.generate17Clicked}>
                generate
            </button>
        } else {
            return <button className="top-btn-bar-btn" id="generate-btn" 
                onClick={props.generateClicked}>
                generate
            </button>
        }
    }

    return (
        <div className="top-btn-bar">
            <div className="top-btn-bar-btn-grp">
                <button className="top-btn-bar-btn" id="hint-btn" 
                    onClick={props.hintClicked}>
                    hint <i className="bi bi-lightbulb"></i>
                </button>
                <span className="spacer"></span>
                {getSizeButtonTags()}
                <span className="spacer"></span>
                {getDifficultyButtonTags()}
                <span className="spacer"></span>
                <button className="top-btn-bar-btn" id="solve-btn" 
                    onClick={props.solveClicked}>
                    solve
                </button>
                {getGenerateButtonTag()}
                <button className="top-btn-bar-btn" id="clear-btn" 
                    onClick={props.clearClicked}>
                    clear
                </button>
            </div>
        </div>
    )
}