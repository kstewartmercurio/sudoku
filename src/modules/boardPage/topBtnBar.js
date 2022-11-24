import React, {useState} from "react";

export function TopBtnBar(props) {
    const [note, setNote] = useState(false);
    const [timer, setTimer] = useState(true);
    const [difficulty, setDifficulty] = useState("easy");

    const handleTopBtnBarClick = (e, btnClicked) => {
        e.preventDefault();

        switch (btnClicked) {
            case "note":
                setNote(!note);
                break;
            case "time":
                setTimer(true);
                break;
            case "zen":
                setTimer(false);
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
    
    let noteIdStr = "note-btn-off";
    if (note === true) {
        noteIdStr = "note-btn-on";
    }

    let timeIdStr = "time-btn-off";
    let zenIdStr = "zen-btn-off";
    if (timer === true) {
        timeIdStr = "time-btn-on";
    } else {
        zenIdStr = "zen-btn-on";
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
                <button className="top-btn-bar-btn" id={noteIdStr} onClick={(e) =>
                    handleTopBtnBarClick(e, "note")
                }>
                    note <i className="bi bi-pencil"></i>
                </button>
                <span className="spacer"></span>
                <button className="top-btn-bar-btn" id={timeIdStr} onClick={(e) =>
                    handleTopBtnBarClick(e, "time")
                }>
                    time <i className="bi bi-stopwatch"></i>
                </button>
                <button className="top-btn-bar-btn" id={zenIdStr} onClick={(e) =>
                    handleTopBtnBarClick(e, "zen")
                }>
                    zen <i className="bi bi-tree"></i>
                </button>
                <span className="spacer"></span>
                <button className="top-btn-bar-btn" id={easyIdStr} onClick={(e) => {
                    handleTopBtnBarClick(e, "easy");
                    props.pullDifficulty("easy");
                }}>
                    easy
                </button>
                <button className="top-btn-bar-btn" id={mediumIdStr} onClick={(e) => {
                    handleTopBtnBarClick(e, "medium");
                    props.pullDifficulty("medium");
                }}>
                    medium
                </button>
                <button className="top-btn-bar-btn" id={hardIdStr} onClick={(e) => {
                    handleTopBtnBarClick(e, "hard");
                    props.pullDifficulty("hard");
                }}>
                    hard
                </button>
                <span className="spacer"></span>
                <button className="top-btn-bar-btn" id="solve-btn" onClick={props.solveClicked}>
                    solve
                </button>
                <button className="top-btn-bar-btn" id="generate-btn" onClick={props.generateClicked}>
                    generate
                </button>
                <button className="top-btn-bar-btn" id="clear-btn" onClick={props.clearClicked}>
                    clear
                </button>
            </div>
        </div>
    )
}