import React, {useState, useEffect, useRef} from "react";
import {Square} from "./square";
import {Puzzle} from "../../solver/puzzle.js";

import {TopBtnBar} from "./topBtnBar";
import {NumBtnBar} from "./numBtnBar";
import {newPuzzle} from "../../generator/clueRemover.js";

import {seventeenPuzzles} from "../../17generator/17puzzles";
import {shuffleArr} from "../../generator/mfgGenerator";

export function Board(props) {
    let windowClick = true;

    const [squares, setSquares] = useState(Array(81).fill(null));
    const [initial, setInitial] = useState(Array(81).fill(false));
    const [solutionSquares, setSolutionSquares] = useState(Array(81).fill(null));
    const [selected, setSelected] = useState(null);
    const [size, setSize] = useState("9x9");
    const [difficulty, setDifficulty] = useState("easy");

    const tornadoMoveCount = useRef(0);
    const [firstMoveMade, setFirstMoveMade] = useState(false);

    useEffect(() => {
        if (props.seventeen === true) {
            setSize("9x9");
        }
        setSquares(Array(81).fill(null));
        setInitial(Array(81).fill(false));
        setSolutionSquares(Array(81).fill(null));
    }, [props.seventeen]);

    useEffect(() => {
        setSquares(Array(81).fill(null));
        setInitial(Array(81).fill(false));
        setSolutionSquares(Array(81).fill(null));
    }, [props.blackout, props.swimTest]);

    useEffect(() => {
        tornadoMoveCount.current = 0;
        setSquares(Array(81).fill(null));
        setInitial(Array(81).fill(false));
        setSolutionSquares(Array(81).fill(null));
    }, [props.tornado]);

    useEffect(() => {
        if (tornadoMoveCount.current === 1) {
            tornadoMoveCount.current = 0;
            tornadoSwap();
        }
    });

    useEffect(() => {
        let currentPuzzle = new Puzzle(squares.slice());
        if ((currentPuzzle.complete() === true) && 
            (currentPuzzle.checkInvalidPuzzle() === false)) {
            var r = document.querySelector(":root");
            var rs = getComputedStyle(r);
            
            let flashColor = rs.getPropertyValue("--selectedSquareColor");
            let restoreColor = rs.getPropertyValue("--squareBackgroundColor");
            r.style.setProperty("--squareBackgroundColor", flashColor);

            setTimeout(function() {
                r.style.setProperty("--squareBackgroundColor", restoreColor);
            }, 250);
        }
    }, [squares])

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
        if (props.blackout === true) {
            let p = new Puzzle(squares.slice());
            if (p.complete() === false) {
                classNameStr += " blackout";
            }
        }
        if ((props.swimTest === true) && (firstMoveMade === true)) {
            classNameStr += " dolphin";
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

            if (props.tornado === true) {
                tornadoMoveCount.current++;
            }
            if ((props.swimTest === true) && (firstMoveMade === false)) {
                setFirstMoveMade(true);
            }

            setSquares(squaresCopy);
            setSelected(null);
        }
    }

    const giveHint = () => {
        // if solutionSquares has a solution, then get the hint value from
        // solutionSquares

        if (selected !== null) {
            let solutionSquaresEmpty = true;
            for (let i = 0; i < solutionSquares.length; i++) {
                if (solutionSquares[i] !== null) {
                    solutionSquaresEmpty = false;
                    break;
                }
            }

            let newSolutionSquares = solutionSquares;
            if (solutionSquaresEmpty) {
                let puzzle = new Puzzle(squares.slice());
                let solveObj = puzzle.solvePuzzle();
                newSolutionSquares = solveObj["puzzleArr"];
            }
            setSolutionSquares(newSolutionSquares);

            let hintVal = newSolutionSquares[selected];

            let squaresCopy = squares.slice();
            squaresCopy[selected] = hintVal;
            
            let initialCopy = initial.slice();
            initialCopy[selected] = true;

            setSquares(squaresCopy);
            setInitial(initialCopy);
            setSelected(null);
        }
    }

    const shareSize = (size) => {
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

    const shareDifficulty = (diff) => {
        switch (diff) {
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

    const solve = (e) => {
        e.preventDefault();

        let solutionSquaresEmpty = true;
        for (let i = 0; i < solutionSquares.length; i++) {
            if (solutionSquares[i] !== null) {
                solutionSquaresEmpty = false;
                break;
            }
        }

        if (solutionSquaresEmpty === true) {
            let puzzle = new Puzzle(squares);
            let solveObj = puzzle.solvePuzzle();

            setSquares(solveObj["puzzleArr"]);
        } else {
            setSquares(solutionSquares.slice());
        }

        setInitial(initial.slice());
        setSelected(null);
    }

    const generatePuzzle = (e) => {
        e.preventDefault();

        const n = parseInt(size[0]);
        let removeNum;
        if (n === 6) {
            if (difficulty === "easy") {
                removeNum = 17;
            } else if (difficulty === "medium") {
                removeNum = 22;
            } else if (difficulty === "hard") {
                removeNum = 26;
            }
        } else if (n === 9) {
            if (difficulty === "easy") {
                removeNum = 43;
            } else if (difficulty === "medium") {
                removeNum = 51;
            } else if (difficulty === "hard") {
                removeNum = 56;
            }
        }
        let puzzleJSON = newPuzzle(n, removeNum);

        let puzzleStr = puzzleJSON["puzzle"];
        let solutionStr = puzzleJSON["solution"];
        let puzzleArr = [];
        let solutionArr = [];
        let initialArr = [];
        for (let i = 0; i < puzzleStr.length; i++) {
            if (puzzleStr[i] === ".") {
                puzzleArr.push(null);
                initialArr.push(false);
            } else {
                puzzleArr.push(parseInt(puzzleStr[i]));
                initialArr.push(true);
            }
        }
        for (let i = 0; i < solutionStr.length; i++) {
            solutionArr.push(parseInt(solutionStr[i]));
        }

        if (props.swimTest === true) {
            setFirstMoveMade(false);
        }

        setSquares(puzzleArr);
        setSolutionSquares(solutionArr);
        setInitial(initialArr);
        setSelected(null);
    }

    const generate17Puzzle = (e) => {
        e.preventDefault();

        let i = Math.floor(Math.random() * seventeenPuzzles.length);
        let puzzleJSON = seventeenPuzzles[i];
        let puzzleJSONStr = puzzleJSON["puzzle"];
        let puzzleJSONSolutionStr = puzzleJSON["solution"];

        let puzzleArr = [];
        let solutionArr = [];
        let initialArr = [];

        for (let i = 0; i < puzzleJSONStr.length; i++) {
            if (puzzleJSONStr[i] === ".") {
                puzzleArr.push(null);
                initialArr.push(false);
            } else {
                puzzleArr.push(parseInt(puzzleJSONStr[i]));
                initialArr.push(true);
            }
            // Isabelle wrote this line of code
            solutionArr.push(puzzleJSONSolutionStr[i]);
        }

        if (props.swimTest === true) {
            setFirstMoveMade(false);
        }

        setSquares(puzzleArr);
        setSolutionSquares(solutionArr);
        setInitial(initialArr);
        setSelected(null);
    }

    const clearBoard = (e) => {
        e.preventDefault();

        if (props.swimTest === true) {
            setFirstMoveMade(false);
        }

        const n = parseInt(size[0]);
        setSquares(Array(n * n).fill(null));
        setInitial(Array(n * n).fill(false));
        setSelected(null);
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

        if (props.tornado === true) {
            tornadoMoveCount.current++;
        }
        if ((props.swimTest === true) && (firstMoveMade === false)) {
            setFirstMoveMade(true);
        }

        setSelected(null);
    }

    const tornadoSwap = () => {
        let solutionSquaresEmpty = true;
        for (let i = 0; i < solutionSquares.length; i++) {
            if (solutionSquares[i] !== null) {
                solutionSquaresEmpty = false;
                break;
            }
        }

        if (solutionSquaresEmpty === false) {
            const n = parseInt(size[0]);
            let valsArr;
            let pairsArr;
            if (n === 6) {
                valsArr = shuffleArr([1, 2, 3, 4, 5, 6]);
                pairsArr = [[valsArr[0], valsArr[1]], [valsArr[2], valsArr[3]], 
                    [valsArr[4], valsArr[5]]];
            } else {
                valsArr = shuffleArr([1, 2, 3, 4, 5, 6, 7, 8, 9]);
                valsArr.pop();
                pairsArr = [[valsArr[0], valsArr[1]], [valsArr[2], valsArr[3]], 
                    [valsArr[4], valsArr[5]], [valsArr[6], valsArr[7]]];
            }

            let x;
            let y;
            let xIndices;
            let yIndices;
            let squaresCopy = squares.slice();
            let solutionSquaresCopy = solutionSquares.slice();
            for (let i = 0; i < pairsArr.length; i++) {
                x = pairsArr[i][0];
                y = pairsArr[i][1];

                xIndices = [];
                yIndices = [];
                for (let i = 0; i < solutionSquaresCopy.length; i++) {
                    if (solutionSquaresCopy[i] === x) {
                        xIndices.push(i);
                    } else if (solutionSquaresCopy[i] === y) {
                        yIndices.push(i);
                    }
                }

                for (let i = 0; i < xIndices.length; i++) {
                    if (squaresCopy[xIndices[i]] !== null) {
                        squaresCopy[xIndices[i]] = y;
                    }
                    solutionSquaresCopy[xIndices[i]] = y;

                    if (squaresCopy[yIndices[i]] !== null) {
                        squaresCopy[yIndices[i]] = x;
                    }
                    solutionSquaresCopy[yIndices[i]] = x;
                }
            }

            setSquares(squaresCopy);
            setSolutionSquares(solutionSquaresCopy);
        }
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
                    <TopBtnBar seventeen={props.seventeen}
                        hintClicked={(e) => giveHint()}
                        size={size}
                        difficulty={difficulty}
                        shareSize={shareSize}
                        shareDifficulty={shareDifficulty}
                        solveClicked={(e) => solve(e)}
                        generateClicked={(e) => generatePuzzle(e)}
                        generate17Clicked={(e) => generate17Puzzle(e)}
                        clearClicked={(e) => clearBoard(e)}/>
                    
                    <div className="board">
                        {buildSquares().map(ele => ele)}
                    </div>
                
                    <NumBtnBar size={size} shareNumClick={shareNumClick}/>
                </div>
            </div>
        </>
    );
}