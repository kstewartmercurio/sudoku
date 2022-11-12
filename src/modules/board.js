import React, {useState} from "react";
import {Square} from "./square";
import {Puzzle} from "../solver/puzzle.js";
import axios from "axios";

export function Board() {
    const [squares, setSquares] = useState(Array(81).fill(null));
    const [status, setStatus] = useState("ready to solve");
    const [selected, setSelected] = useState(null);

    const renderSquare = (i) => {
        if (selected === i) {
            return (
                <Square key={i} idStr={i.toString()} val={squares[i]} 
                    onKeyPress={(e) => handleKeyPress(e, i)}
                    onClick={(e) => handleClick(e, i)} sel={true}/>
            )
        } else {
            return (
                <Square key={i} idStr={i.toString()} val={squares[i]} 
                    onKeyPress={(e) => handleKeyPress(e, i)}
                    onClick={(e) => handleClick(e, i)} sel={false}/>
            );
        }
    };

    const buildRows = () => {
        // return an array of rows, each containing 9 Square objects
        let rows = [];

        for (let i = 0; i < 9; i++) {
            let j = i * 9;

            let classStr = "board-row-" + i.toString();

            rows.push(
                <div key={i} className={classStr}>
                    {renderSquare(j)}
                    {renderSquare(j + 1)}
                    {renderSquare(j + 2)}
                    {renderSquare(j + 3)}
                    {renderSquare(j + 4)}
                    {renderSquare(j + 5)}
                    {renderSquare(j + 6)}
                    {renderSquare(j + 7)}
                    {renderSquare(j + 8)}
                </div>
            );
        }

        return rows
    };

    const handleKeyPress = (e, i) => {
        if (selected === i) {
            // create a copy of the board and update it with valid user input
            let squaresCopy = squares.slice();
            
            switch (e.key) {
                case "1":
                    squaresCopy[i] = 1;
                    break;            
                case "2":
                    squaresCopy[i] = 2;
                    break;
                case "3":
                    squaresCopy[i] = 3;
                    break;
                case "4":
                    squaresCopy[i] = 4;
                    break;
                case "5":
                    squaresCopy[i] = 5;
                    break;
                case "6":
                    squaresCopy[i] = 6;
                    break;
                case "7":
                    squaresCopy[i] = 7;
                    break;
                case "8":
                    squaresCopy[i] = 8;
                    break;
                case "9":
                    squaresCopy[i] = 9;
                    break;
                case "-":
                    squaresCopy[i] = null;
                    break;
                default:
                    break;
            };

            // replace the actual board with its copy
            setSquares(squaresCopy)
            setSelected(null)
        }
    }

    const handleClick = (e, i) => {
        e.preventDefault();

        setSelected(i);
    }

    const solve = (e) => {
        e.preventDefault();

        // take user input, create a corresponding Puzzle object, and solve
        let puzzle = new Puzzle(squares);
        puzzle = puzzle.solvePuzzle();

        // output the solved sudoku to the user and update the button text
        setSquares(puzzle);
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
        params: {difficulty: "hard"},
        headers: {
            'X-RapidAPI-Key': '2138fedc77msh0d37375d64802d5p130230jsn41094285e5fe',
            'X-RapidAPI-Host': 'sudoku-generator1.p.rapidapi.com'
        }
        };
    
        axios.request(options).then(function (response) {
            let puzzleArr = [];
            for (let i = 0; i < response.data.puzzle.length; i++) {
                if (response.data.puzzle[i] === ".") {
                    puzzleArr.push(null);
                } else {
                    puzzleArr.push(parseInt(response.data.puzzle[i]));
                }
            }

            setSquares(puzzleArr);
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
        setStatus("ready to solve");
        setSelected(null);
    }

    return (
        <>
            {/* display each row */}
            {buildRows().map(row => row)}
            {/* display the solve/new puzzle button */}
            <div className="btnBar">
                <button className="btn" id="solveBtn" onClick={(e) => {
                    // just to prevent a status warning, not necessary
                    if (status) {
                        solve(e);
                    }
                }}>
                    solve
                </button>
                <button className="btn" id="genBtn" onClick={(e) => {
                    generatePuzzle(e);
                }}>
                    generate puzzle
                </button>
                <button className="btn" id="clearBtn" onClick={(e) => {
                    clearBoard(e);
                }}>
                    clear board
                </button>
            </div>
        </>
    );
}