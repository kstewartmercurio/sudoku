import React, {useState} from "react";
import {Square} from "./square";
import {Puzzle} from "../../solver/puzzle.js";

import {TopBtnBar} from "./topBtnBar";
import {NumBtnBar} from "./numBtnBar";
import {generateSolution} from "../../generator/mfgGenerator.js";

export function Board() {
    const [squares, setSquares] = useState(Array(81).fill(null));
    const [initial, setInitial] = useState(Array(81).fill(false));
    const [selected, setSelected] = useState(null);
    const [size, setSize] = useState("9x9");
    // const [difficulty, setDifficulty] = useState("1");

    let windowClick = true;

    const renderSquare = (i) => {
        let classNameStr = "square ";
        if (size === "6x6") {
            classNameStr += "board6x6-row-" + 
                (Math.floor(i / 6)).toString() + " board6x6-column-" + 
                (i % 6).toString();

            if (initial[i] === true) {
                classNameStr += " initial";
            }
        } else if (size === "9x9") {
            classNameStr += "board9x9-row-" + 
                (Math.floor(i / 9)).toString() + " board9x9-column-" + 
                (i % 9).toString();

            if (initial[i] === true) {
                classNameStr += " initial";
            }
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
                }} onKeyPress={(e) => {
                    handleKeyPress(e);
                }}
                sel={selBool}/>
        )
    };

    const buildSquares = () => {
        let elementLst = [];
        const n = parseInt(size[0]);

        for (let i = 0; i < (n * n); i++) {
            elementLst.push(renderSquare(i));

            if (i % n === (n - 1)) {
                const brKey = "br-" + Math.floor(i / n).toString();
                elementLst.push(<br key={brKey}/>);
            }
        }
        
        return elementLst;
    }

    const handleSquareClick = (e, i) => {
        e.preventDefault();

        windowClick = false;
        setSelected(i);
    }

    const handleKeyPress = (e) => {
        if (initial[selected] === true) {
            setSelected(null);
        } else if ((selected !== null) && ((parseInt(e.key) >= 0) && 
            (parseInt(e.key) <= 9))) {
            let squaresCopy = squares.slice();

            if (parseInt(e.key) === 0) {
                squaresCopy[selected] = null;
            } else {
                squaresCopy[selected] = parseInt(e.key);
            }

            setSquares(squaresCopy);
            setSelected(null);
        }
    }

    const solve = (e) => {
        e.preventDefault();

        // given an invalid input, an invalid output will be returned, instead
        // we want the solving attempt to halt
        let puzzle = new Puzzle(squares);
        let solveObj = puzzle.solvePuzzle();

        setSquares(solveObj["puzzleArr"]);
        setInitial(initial.slice());
        setSelected(null);
    }

    const generatePuzzle = (e) => {
        e.preventDefault();

        const n = parseInt(size[0]);
        setSquares(Array(n * n).fill(null));

        let solnStr = generateSolution(parseInt(size[0]));
        let solnArr = [];
        for (let i = 0; i < solnStr.length; i++) {
            solnArr.push(parseInt(solnStr[i]));
        }

        setSquares(solnArr);
        setInitial(Array(n * n).fill(true));
        setSelected(null);
    }

    const clearBoard = (e) => {
        e.preventDefault();

        const n = parseInt(size[0]);
        setSquares(Array(n * n).fill(null));
        setInitial(Array(n * n).fill(false));
        setSelected(null);
    }

    const pullSize = (size) => {
        let n;
        switch (size) {
            case "6x6":
                n = 6
                setSize("6x6");
                break;
            case "9x9":
                n = 9;
                setSize("9x9");
                break;
            default:
                break;
        }

        setSquares(Array(n * n).fill(null));
        setInitial(Array(n * n).fill(false));
        setSelected(null);
    }

    const pullDifficulty = (diff) => {
        switch (diff) {
            case "easy":
                // setDifficulty(1);
                break;
            case "medium":
                // setDifficulty(2);
                break;
            case "hard":
                // setDifficulty(3);
                break;
            default:
                break;
        }
    }

    const shareNumClick = (n) => {
        if ((selected !== null) && (initial[selected] === false)) {
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

    return (
        <>
            <div className="section" id="board-page" onClick={(e) => {
                if ((windowClick === true) && (selected !== null)) {
                    setSelected(null);
                }
                windowClick = true;
            }}>
                <div id="board-page-center-content">
                    {/* <button onClick={(e) => {
                        setSquares([
                            2, null, null, 5, null, 7, 4, null, 6,
                            null, 3, null, null, 3, 1, null, null, null,
                            null, null, null, null, null, null, 2, 3, null,
                            null, null, null, null, 2, null, null, null, null,
                            8, 6, null, 3, 1, null, null, null, null,
                            null, 4, 5, null, null, null, null, null, null,
                            null, null, 9, null, null, null, 7, null, null,
                            null, null, 6, 9, 5, null, null, null, 2,
                            null, null, 1, null, null, 6, null, null, 8
                        ]);
                    }}>
                        test puzzle
                    </button> */}
                    <TopBtnBar solveClicked={(e) => solve(e)}
                        pullSize={pullSize}
                        pullDifficulty={pullDifficulty}
                        generateClicked={(e) => generatePuzzle(e)}
                        clearClicked={(e) => clearBoard(e)}/>

                    <div className="board">
                        {buildSquares().map(ele => ele)}
                    </div>
                
                    <NumBtnBar shareNumClick={shareNumClick}/>
                </div>
            </div>
        </>
    );
}