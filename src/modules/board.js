import React, {useState} from "react";
import {Square} from "./square";
import {Puzzle} from "../solver/puzzle.js";
import axios from "axios";

export function Board() {
    const [squares, setSquares] = useState(Array(81).fill(null));
    const [changeable, setChangeable] = useState(Array(81).fill(true));
    const [selected, setSelected] = useState(null);
    const [note, setNote] = useState(false);
    const [metric, setMetric] = useState("time");
    const [difficulty, setDifficulty] = useState("1");

    let windowClick = true;

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
                val={squares[i]} onClick={(e) => {
                    handleSquareClick(e, i);
                }} 
                sel={selBool}/>
        )
    };

    const buildNavBar = () => {
        let noteIdStr = "note-btn-off";
        if (note === true) {
            noteIdStr = "note-btn-on";
        }

        let timeIdStr = "time-btn-off";
        let zenIdStr = "zen-btn-off";
        if (metric === "time") {
            timeIdStr = "time-btn-on";
        } else {
            zenIdStr = "zen-btn-on";
        }

        let easyIdStr = "easy-btn";
        let medIdStr = "med-btn";
        let hardIdStr = "hard-btn";
        if (difficulty === "1") {
            easyIdStr = "difficulty-btn";
        } else if (difficulty === "2") {
            medIdStr = "difficulty-btn";
        } else {
            hardIdStr = "difficulty-btn";
        }

        return (
            <div className="nav-btn-grp">
                <button className="nav-btn" id={noteIdStr} onClick={(e) =>
                    handleNoteClick(e)
                }>
                    note <i className="bi bi-pencil"></i>
                </button>
                <span className="spacer"></span>

                <button className="nav-btn" id={timeIdStr} onClick={(e) =>
                    handleMetricClick(e)
                }>
                    time <i className="bi bi-stopwatch"></i>
                </button>
                <button className="nav-btn" id={zenIdStr} onClick={(e) =>
                    handleMetricClick(e)
                }>
                    zen <i className="bi bi-tree"></i>
                </button>

                <span className="spacer"></span>
                <button className="nav-btn" id={easyIdStr} onClick={(e) => 
                    handleDifficultyClick(e, "1")
                }>
                    easy
                </button>
                <button className="nav-btn" id={medIdStr} onClick={(e) =>
                    handleDifficultyClick(e, "2")
                }>
                    medium
                </button>
                <button className="nav-btn" id={hardIdStr} onClick={(e) =>
                    handleDifficultyClick(e, "3")
                }>
                    hard
                </button>
                <span className="spacer"></span>
                <button className="nav-btn" onClick={(e) => {
                    solve(e);
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

        windowClick = false;
        setSelected(i);
    }

    const handleNoteClick = (e) => {
        e.preventDefault();

        windowClick = false;
        setNote(!note);
    }

    const handleMetricClick = (e) => {
        e.preventDefault();

        windowClick = false;
        if (metric === "time") {
            setMetric("zen");
        } else {
            setMetric("time");
        }
    }

    const handleDifficultyClick = (e, diff) => {
        e.preventDefault();

        windowClick = false;
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
        setSelected(null);
    }

    const generatePuzzle = (e) => {
        e.preventDefault();

        setSquares(Array(81).fill(null));
        
        const options = {
            method: 'GET',
            url: 'https://sudoku-board.p.rapidapi.com/new-board',
            params: {diff: difficulty, stype: 'string', solu: 'true'},
            headers: {
              'X-RapidAPI-Key': '2138fedc77msh0d37375d64802d5p130230jsn41094285e5fe',
              'X-RapidAPI-Host': 'sudoku-board.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data["response"]["unsolved-sudoku"]);

              let puzzleArr = [];
              let changeableArr = [];
              for (let i = 0; i < response.data["response"]["unsolved-sudoku"].length; i++) {
                  if (response.data["response"]["unsolved-sudoku"][i] === ".") {
                      puzzleArr.push(null);
                      changeableArr.push(true);
                  } else {
                      puzzleArr.push(parseInt(response.data["response"]["unsolved-sudoku"][i]));
                      changeableArr.push(false);
                  }
              }  

              setSquares(puzzleArr);
              setChangeable(changeableArr);
              setSelected(null);
          }).catch(function (error) {
              console.error(error);
          });
    }

    const clearBoard = (e) => {
        e.preventDefault();

        setSquares(Array(81).fill(null));
        setChangeable(Array(81).fill(true));
        setSelected(null);
    }

    return (
        <>
            <div className="section" onClick={(e) => {
                if ((windowClick === true) && (selected !== null)) {
                    setSelected(null);
                }
                windowClick = true;
            }}>
                <div className="center-content" id="board-page">
                    <div id="board-content">
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
                </div>
            </div>
        </>
    );
}