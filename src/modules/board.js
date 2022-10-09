import React, {useState} from "react";
import {Square} from "./square";
import {Puzzle} from "../solution/puzzle.js";

export function Board() {
    const [squares, setSquares] = useState(Array(81).fill(null));
    const [status, setStatus] = useState("solve");

    const renderSquare = (i) => {
        return (
            <Square key={i.toString()} val={squares[i]} onKeyPress={(e) => handleKeyPress(e, i)}/>
        );
    };

    const buildRows = () => {
        // return an array of rows, each containing 9 Square objects
        let rows = [];

        for (let i = 0; i < 9; i++) {
            let j = i * 9;

            rows.push(
                <div className="board-row">
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
    }

    const solve = (e) => {
        e.preventDefault();

        // take user input, create a corresponding Puzzle object, and solve
        let puzzle = new Puzzle(squares);
        puzzle = puzzle.solvePuzzle();

        // output the solved sudoku to the user and update the button text
        setSquares(puzzle);
        setStatus("new puzzle");
    }

    const newPuzzle = (e) => {
        e.preventDefault();

        // reset the puzzle input and button text
        setSquares(Array(81).fill(null));
        setStatus("solve");
    }

    return (
        <div>
            {/* display each row */}
            {buildRows().map(row => row)}
            {/* display the solve/new puzzle button */}
            <button className="sub" onClick={(e) => {
                if (status === "solve") {
                    solve(e);
                } else {
                    newPuzzle(e);
                }
            }}>
                {status}
            </button>
        </div>
    );
}