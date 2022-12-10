import React, {useState} from "react";

export function TopBtnBar(props) {
    const [size, setSize] = useState("9x9");
    const [difficulty, setDifficulty] = useState("easy");

    const handleTopBtnBarClick = (e, btnClicked) => {
        e.preventDefault();

        switch (btnClicked) {
            case "6x6":
                setSize("6x6");
                break;
            case "9x9":
                setSize("9x9");
                break;
            case "easy":
                setDifficulty("easy");
                break;
            case "medium":
                setDifficulty("medium");
                break;
            case "hard":
                setDifficulty("hard");
                break;
            default:
                break;
        }
    }

    let size6x6IdStr = "size6x6-btn-off";
    let size9x9IdStr = "size9x9-btn-off";
    if (size === "9x9") {
        size9x9IdStr = "size9x9-btn-on";
    } else {
        size6x6IdStr = "size6x6-btn-on";
    }

    let easyIdStr = "easy-btn";
    let mediumIdStr = "medium-btn";
    let hardIdStr = "hard-btn";
    if (difficulty === "easy") {
        easyIdStr = "active-difficulty-btn";
    } else if (difficulty === "medium") {
        mediumIdStr = "active-difficulty-btn";
    } else {
        hardIdStr = "active-difficulty-btn";
    }

    return (
        <div className="top-btn-bar">
            <div className="top-btn-bar-btn-grp">
                <button className="top-btn-bar-btn" id="hint-btn" 
                    onClick={props.hintClicked}>
                    hint <i className="bi bi-lightbulb"></i>
                </button>
                <span className="spacer"></span>
                <button className="top-btn-bar-btn" id={size6x6IdStr} 
                    onClick={(e) => {
                    handleTopBtnBarClick(e, "6x6");
                    props.pullSize("6x6");
                }}>
                    6x6
                </button>
                <button className="top-btn-bar-btn" id={size9x9IdStr} 
                    onClick={(e) => {
                    handleTopBtnBarClick(e, "9x9");
                    props.pullSize("9x9");
                }}>
                    9x9
                </button>
                <span className="spacer"></span>
                <button className="top-btn-bar-btn" id={easyIdStr} 
                    onClick={(e) => {
                    handleTopBtnBarClick(e, "easy");
                    props.pullDifficulty("easy");
                }}>
                    easy
                </button>
                <button className="top-btn-bar-btn" id={mediumIdStr} 
                    onClick={(e) => {
                    handleTopBtnBarClick(e, "medium");
                    props.pullDifficulty("medium");
                }}>
                    medium
                </button>
                <button className="top-btn-bar-btn" id={hardIdStr} 
                    onClick={(e) => {
                    handleTopBtnBarClick(e, "hard");
                    props.pullDifficulty("hard");
                }}>
                    hard
                </button>
                <span className="spacer"></span>
                <button className="top-btn-bar-btn" id="solve-btn" 
                    onClick={props.solveClicked}>
                    solve
                </button>
                <button className="top-btn-bar-btn" id="generate-btn" 
                    onClick={props.generateClicked}>
                    generate
                </button>
                <button className="top-btn-bar-btn" id="clear-btn" 
                    onClick={props.clearClicked}>
                    clear
                </button>
            </div>
        </div>
    )
}