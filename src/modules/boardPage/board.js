import React, {useState} from "react";
import axios from "axios";
import {Square} from "./square";
import {Puzzle} from "../../solver/puzzle.js";

import {TopBtnBar} from "./topBtnBar";
import {NumBtnBar} from "./numBtnBar";

export function Board() {
    const [squares, setSquares] = useState(Array(81).fill(null));
    const [initial, setInitial] = useState(Array(81).fill(false));
    const [selected, setSelected] = useState(null);
    const [difficulty, setDifficulty] = useState("1");

    let windowClick = true;

    const renderSquare = (i) => {
        let classNameStr = "square board-row-" + (Math.floor(i / 9)).toString() + " board-column-" + (i % 9).toString();
        if (initial[i] === true) {
            classNameStr += " initial";
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

    const handleSquareClick = (e, i) => {
        e.preventDefault();

        windowClick = false;
        setSelected(i);
    }

    const solve = (e) => {
        e.preventDefault();

        // take user input, create a corresponding Puzzle object, and solve
        let puzzle = new Puzzle(squares);
        puzzle = puzzle.solvePuzzle();

        // output the solved sudoku to the user and update the button text
        setSquares(puzzle);
        setInitial(initial.slice());
        setSelected(null);
    }

    const pullDifficulty = (diff) => {
        switch (diff) {
            case "easy":
                setDifficulty(1);
                break;
            case "medium":
                setDifficulty(2);
                break;
            default:
                setDifficulty(3);
                break;
        }
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
            console.log(response.data);
            let puzzleArr = [];
            let initialArr = [];
            for (let i = 0; i < response.data["response"]["unsolved-sudoku"].length; i++) {
                if (response.data["response"]["unsolved-sudoku"][i] === ".") {
                    puzzleArr.push(null);
                    initialArr.push(false);
                } else {
                    puzzleArr.push(parseInt(response.data["response"]["unsolved-sudoku"][i]));
                    initialArr.push(true);
                }
            }  

            setSquares(puzzleArr);
            setInitial(initialArr);
            setSelected(null);
        }).catch(function (error) {
            console.error(error);
        });
    }

    const clearBoard = (e) => {
        e.preventDefault();

        setSquares(Array(81).fill(null));
        setInitial(Array(81).fill(false));
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
                    <TopBtnBar solveClicked={(e) => solve(e)}
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