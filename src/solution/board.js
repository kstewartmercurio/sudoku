import {Square} from "./square.js";

class Board {
    constructor(puzzle) {
        // input puzzle is an array representation of the sudoku puzzle
        this.puzzleArr = puzzle;

        // store an array of Square objects representing each square in the 
        // puzzle
        this.squares = [];
        for (let i = 0; i < this.puzzleArr.length; i++) {
            let tempSquare = new Square();
            tempSquare.setInd(i);
            
            if (this.puzzleArr[i] === null) {
                tempSquare.setVal(0);
            } else {
                tempSquare.setVal(this.puzzleArr[i]);
            }

            this.squares.push(tempSquare);
        }

        // set coords for all squares

        // set rows, columns, and boxes vectors

        // construct potential vectors
    }
}