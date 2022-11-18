import React, {useState} from "react";
import {Square} from "./square";
import {Puzzle} from "../solver/puzzle.js";
import axios from "axios";

export function Board() {
    const [squares, setSquares] = useState(Array(81).fill(null));
    const [changeable, setChangeable] = useState(Array(81).fill(false));
    const [status, setStatus] = useState("ready to solve");
    const [selected, setSelected] = useState(null);
    const [note, setNote] = useState(false);
    const [difficulty, setDifficulty] = useState("easy");

    const renderSquare = (i) => {
        let classNameStr = "square board-row-" + (Math.floor(i / 9)).toString() + " board-column-" + (i % 9).toString();
        if (changeable[i] === false) {
            classNameStr += " unchangeable";
        }
        
        let selBool;
        if (selected === i) {
            selBool = true;
        } else {
            selBool = false;
        }

        return (
            <Square className={classNameStr} key={i} idStr={i.toString()}
                val={squares[i]} onClick={(e) => handleSquareClick(e, i)} 
                sel={selBool}/>
        )
    };

    const buildNavBar = () => {
        let noteIdStr = "note-btn-off";
        if (note === true) {
            noteIdStr = "note-btn-on";
        }

        let easyIdStr = "easy-btn";
        let medIdStr = "med-btn";
        let hardIdStr = "hard-btn";
        if (difficulty === "easy") {
            easyIdStr = "difficulty-btn";
        } else if (difficulty === "medium") {
            medIdStr = "difficulty-btn";
        } else {
            hardIdStr = "difficulty-btn";
        }

        return (
            <div className="nav-btn-grp">
                {/* <button className="nav-btn" id="undo-btn">
                    undo <i className="bi bi-arrow-counterclockwise"></i>
                </button>
                <button className="nav-btn" id="hint-btn">
                    hint <i className="bi bi-lightbulb"></i>
                </button> */}
                <button className="nav-btn" id={noteIdStr} onClick={(e) =>
                    handleNoteClick(e)
                }>
                    note <i className="bi bi-pencil"></i>
                </button>
                <span className="spacer"></span>

                <button className="nav-btn">
                    time <i class="bi bi-stopwatch"></i>
                </button>
                <button className="nav-btn">
                    progress <i class="bi bi-percent"></i>
                </button>

                <span className="spacer"></span>
                <button className="nav-btn" id={easyIdStr} onClick={(e) => 
                    handleDifficultyClick(e, "easy")
                }>
                    easy
                </button>
                <button className="nav-btn" id={medIdStr} onClick={(e) =>
                    handleDifficultyClick(e, "medium")
                }>
                    medium
                </button>
                <button className="nav-btn" id={hardIdStr} onClick={(e) =>
                    handleDifficultyClick(e, "hard")
                }>
                    hard
                </button>
                <span className="spacer"></span>
                <button className="nav-btn" onClick={(e) => {
                    if (status) {
                        solve(e);
                    }
                }}>
                    solve
                </button>
                <button className="nav-btn" onClick={(e) => {
                    generatePuzzle(e);
                }}>
                    generate
                </button>
                <button className="nav-btn" id="clear-btn" onClick={(e) => {
                    clearBoard(e);
                }}>
                    clear
                </button>

            </div>
        )
    }

    const buildSquares = () => {
        let elementLst = [];

        for (let i = 0; i < 81; i++) {
            elementLst.push(renderSquare(i));

            if (i % 9 === 8) {
                const brKey = "br-" + Math.floor(i / 9).toString();
                elementLst.push(<br key={brKey} />)
            }
        }

        return elementLst;
    }

    const buildNumBar = () => {
        return (
            <div className="num-btn-grp">
                <button className="num-btn" id="1btn" onClick={(e) => {
                    handleNumBtnClick(e, 1);
                }}>
                    1
                </button>
                <button className="num-btn" id="2btn" onClick={(e) => {
                    handleNumBtnClick(e, 2);
                }}>
                    2
                </button>
                <button className="num-btn" id="3btn" onClick={(e) => {
                    handleNumBtnClick(e, 3);
                }}>
                    3
                </button>
                <button className="num-btn" id="4btn" onClick={(e) => {
                    handleNumBtnClick(e, 4);
                }}>
                    4
                </button>
                <button className="num-btn" id="5btn" onClick={(e) => {
                    handleNumBtnClick(e, 5);
                }}>
                    5
                </button>
                <button className="num-btn" id="6btn" onClick={(e) => {
                    handleNumBtnClick(e, 6);
                }}>
                    6
                </button>
                <button className="num-btn" id="7btn" onClick={(e) => {
                    handleNumBtnClick(e, 7);
                }}>
                    7
                </button>
                <button className="num-btn" id="8btn" onClick={(e) => {
                    handleNumBtnClick(e, 8);
                }}>
                    8
                </button>
                <button className="num-btn" id="9btn" onClick={(e) => {
                    handleNumBtnClick(e, 9);
                }}>
                    9
                </button>
                <button className="num-btn" id="erase-btn" onClick={(e) => {
                    handleNumBtnClick(e, 0);
                }}>
                    <i className="bi bi-eraser-fill"></i>
                </button>
            </div>
        );
    }

    const handleSquareClick = (e, i) => {
        e.preventDefault();

        setSelected(i);
    }

    const handleNoteClick = (e) => {
        e.preventDefault();

        setNote(!note);
    }

    const handleDifficultyClick = (e, diff) => {
        e.preventDefault();

        setDifficulty(diff);
    }

    const handleNumBtnClick = (e, n) => {
        e.preventDefault();

        if ((selected !== null) && (changeable[selected] === true)) {
            let squaresCopy = squares.slice();

            if (n === 0) {
                squaresCopy[selected] = null;
            } else {
                squaresCopy[selected] = n;
            }
            
            setSquares(squaresCopy);
        }

        setSelected(null);
    }

    const solve = (e) => {
        e.preventDefault();

        // take user input, create a corresponding Puzzle object, and solve
        let puzzle = new Puzzle(squares);
        puzzle = puzzle.solvePuzzle();

        // output the solved sudoku to the user and update the button text
        setSquares(puzzle);
        setChangeable(Array(81).fill(false));
        setStatus("solved");
        setSelected(null);
    }

    const generatePuzzle = (e) => {
        e.preventDefault();

        // reset the puzzle
        setSquares(Array(81).fill(null));

        // retrieving new puzzle from Sudoku Generator API
        const options = {
        method: 'GET',
        url: 'https://sudoku-generator1.p.rapidapi.com/sudoku/generate',
        params: {difficulty: difficulty},
        headers: {
            'X-RapidAPI-Key': '2138fedc77msh0d37375d64802d5p130230jsn41094285e5fe',
            'X-RapidAPI-Host': 'sudoku-generator1.p.rapidapi.com'
        }
        };
    
        axios.request(options).then(function (response) {
            let puzzleArr = [];
            let changeableArr = [];
            for (let i = 0; i < response.data.puzzle.length; i++) {
                if (response.data.puzzle[i] === ".") {
                    puzzleArr.push(null);
                    changeableArr.push(true);
                } else {
                    puzzleArr.push(parseInt(response.data.puzzle[i]));
                    changeableArr.push(false);
                }
            }

            setSquares(puzzleArr);
            setChangeable(changeableArr);
            setStatus("ready to solve");
            setSelected(null);
        }).catch(function (error) {
            console.error(error);
        });
    }

    const clearBoard = (e) => {
        e.preventDefault();

        // reset the puzzle
        setSquares(Array(81).fill(null));
        setChangeable(Array(81).fill(true));
        setStatus("ready to solve");
        setSelected(null);
    }

    return (
        <div className="test-div">
            <div className="navbar">
                {buildNavBar()}
            </div>

            <div className="board">
                {buildSquares().map(ele => ele)}
            </div>
            
            <div className="num-bar">
                {buildNumBar()}
            </div>
        </div>
    );
}