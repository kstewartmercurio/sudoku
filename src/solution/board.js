import {Square} from "./square.js";
import {Nine} from "./nine.js";
import {Move} from "./move.js";
import { toBeRequired } from "@testing-library/jest-dom/dist/matchers.js";

export class Board {
    constructor(puzzle) {
        // input puzzle is an array representation of the sudoku puzzle
        this.puzzleArr = puzzle;

        // store an array of Square objects representing each square in the 
        // puzzle
        this.squares = [];
        for (let i = 0; i < this.puzzleArr.length; i++) {
            let tempSquare = new Square();
            tempSquare.setInd(i);
            
            if (this.puzzleArr[i] !== null) {
                tempSquare.setVal(this.puzzleArr[i]);
            }

            this.squares.push(tempSquare);
        }

        // set coords for all squares
        this.initCoords();

        // set rows, columns, and boxes vectors
        this.rows = [];
        this.columns = [];
        this.boxes = [];
        this.initNines();

        // construct potential vectors
        this.initPotentialVals();

        // initialize the moves stack
        this.moves = [];
    }

    TESTVIEWB() {
        // SEE NINE OBJECTS
        console.log();
        console.log("ROWS:");
        for (let i = 0; i < this.rows.length; i++) {
            this.rows[i].TESTVIEWN();
        }
        console.log();

        console.log("COLUMNS:");
        for (let i = 0; i < this.columns.length; i++) {
            this.columns[i].TESTVIEWN();
        }
        console.log();

        console.log("BOXES:");
        for (let i = 0; i < this.boxes.length; i++) {
            this.boxes[i].TESTVIEWN();
        }
        console.log();

        // SEE MOVE OBJECTS
        console.log("MOVES:");
        for (let i = (this.moves.length - 1); i >= 0; i--) {
            this.moves[i].TESTVIEWM();
        }
        console.log();

        // SEE SQUARE OBJECTS
        for (let i = 0; i < this.squares.length; i++) {
            this.squares[i].TESTVIEWS();
        }
        console.log();
    }

    initCoords() {
        // iterate through each square and assign its corresponding row, column,
        // and box
        for (let i = 0; i < this.squares.length; i++) {
            // compute row and column coordinates
            let r = Math.floor(i / 9);
            let c = i % 9

            // compute box coordinate
            let b;
            switch (i) {
                case 0: case 1: case 2: case 9: case 10: case 11: case 18: 
                    case 19: case 20:
                    b = 0;
                    break;
                case 3: case 4: case 5: case 12: case 13: case 14: case 21:
                    case 22: case 23:
                    b = 1;
                    break;
                case 6: case 7: case 8: case 15: case 16: case 17: case 24:
                    case 25: case 26:
                    b = 2;
                    break;
                case 27: case 28: case 29: case 36: case 37: case 38: case 45:
                    case 46: case 47:
                    b = 3;
                    break;
                case 30: case 31: case 32: case 39: case 40: case 41: case 48:
                    case 49: case 50:
                    b = 4;
                    break;
                case 33: case 34: case 35: case 42: case 43: case 44: case 51:
                    case 52: case 53:
                    b = 5;
                    break;
                case 54: case 55: case 56: case 63: case 64: case 65: case 72:
                    case 73: case 74:
                    b = 6;
                    break;
                case 57: case 58: case 59: case 66: case 67: case 68: case 75:
                    case 76: case 77:
                    b = 7;
                    break;
                case 60: case 61: case 62: case 69: case 70: case 71: case 78:
                    case 79: case 80:
                    b = 8;
                    break;
                default:
                    break;
            }

            this.squares[i].setCoord(r, c, b);
        }
    }

    initNines() {
        // add empty Nine objects to this.rows, this.columns, and this.boxes
        for (let i = 0; i < 9; i++) {
            let tempRow = new Nine();
            this.rows.push(tempRow);
            let tempColumn = new Nine();
            this.columns.push(tempColumn);
            let tempBox = new Nine();
            this.boxes.push(tempBox);
        }

        // populate those Nine objects based on each squares corresponding
        // coordinate values
        for (let i = 0; i < this.squares.length; i++) {
            let currentSquare = this.squares[i];
            let rowIndex = this.squares[i].getCoords()[0];
            let columnIndex = this.squares[i].getCoords()[1];
            let boxIndex = this.squares[i].getCoords()[2];
            
            this.rows[rowIndex].add(currentSquare);
            this.columns[columnIndex].add(currentSquare);
            this.boxes[boxIndex].add(currentSquare);
        }
    }

    initPotentialVals() {
        for (let i = 0; i < this.squares.length; i++) {
            // initialize potential values for squares that don't already have
            // a value
            if (this.squares[i].getVal() === null) {
                let rowIndex = this.squares[i].getCoords()[0];
                let columnIndex = this.squares[i].getCoords()[1];
                let boxIndex = this.squares[i].getCoords()[2];

                // check if each potential value is not already in the square's
                // row, column, and box
                for (let j = 1; j < 10; j++) {
                    if ((!this.rows[rowIndex].contains(j)) && 
                        (!this.columns[columnIndex].contains(j)) &&
                        (!this.boxes[boxIndex].contains(j))) {
                        this.squares[i].addPotentialVal(j);
                    }
                }
            }

            // necessary for backtracking algorithm
            if (this.squares[i].getPotentialVals().length === 
                this.squares[i].getGuessCount()) {
                this.squares[i].resetGuessCount();
            }
        }
    }

    clearPotentialVals() {
        // empty all values from every Square object's potentialVals
        for (let i = 0; i < this.squares.length; i++) {
            this.squares[i].resetPotentialVals();
        }
    }



    checkSinglesExist() {
        // determine whether or not squares with one potentialVal ("singles") 
        // exist
        let retBool = false;
        for (let i = 0; i < this.squares.length; i++) {
            if (this.squares[i].getPotentialVals().length === 1) {
                retBool = true;
                break;
            }
        }

        return retBool;
    }

    solveSingles() {
        let singlesExist = this.checkSinglesExist();
        let k = 0;

        while (singlesExist) {
            for (let i = 0; i < this.squares.length; i++) {
                if (this.squares[i].getPotentialVals().length === 1) {
                    // store the index of the single found and store its new
                    // value
                    let ind = this.squares[i].getInd();
                    let newVal = this.squares[i].getPotentialVals()[0];

                    // create a Move object to represent the single being
                    // filled in
                    const tempMove = new Move(ind, newVal, false);
                    this.moves.push(tempMove);

                    // set the square's new value and reinitialize every
                    // square's potentialVals
                    this.squares[i].setVal(newVal);
                    this.clearPotentialVals();
                    this.initPotentialVals();
                }
            }

            singlesExist = this.checkSinglesExist();
        }
    }

    getMinPotentialValsSize() {
        // determine what potentialVals array size the square that will be
        // guessed should have (i.e. no singles exist, the smallest nonempty
        // potentialVals is of size 3, therefore make a guess on a square with
        // a potentialVals array of size 3)
        let minSize = 10;
        for (let i = 0; i < this.squares.length; i++) {
            if ((this.squares[i].getPotentialVals().length < minSize) &&
                (this.squares[i].getPotentialVals().length !== 0)) {
                minSize = this.squares[i].getPotentialVals().length;
            }
        }

        return minSize
    }

    guess() {
        for (let i = 0; i < this.squares.length; i++) {
            // find a square with the minimum potentialVals array size
            if (this.squares[i].getPotentialVals().length === 
                this.getMinPotentialValsSize()) {
                // store the index of the square found and store its new value
                let ind = this.squares[i].getInd();
                let gc = this.squares[i].getGuessCount();
                let val = this.squares[i].getPotentialVals()[gc];
                
                // determine if this is the last potential value for this square
                // (this guess is not a guess and thus not a checkpoint)
                let lastGuess;
                if (this.squares[i].getPotentialVals().length - 1 === gc) {
                    lastGuess = true;
                    this.squares[i].resetGuessCount();
                } else {
                    lastGuess = false;
                    this.squares[i].incrementGuessCount();
                }

                // create a Move object to represent the guess being made
                let tempMove = new Move(ind, val, !lastGuess);
                this.moves.push(tempMove);

                // set the square's new value and reinitialize every
                // square's potentialVals
                this.squares[i].setVal(val);
                this.clearPotentialVals();
                this.initPotentialVals();

                break;
            }
        }
    }

    complete() {
        // determine if the puzzle is complete
        for (let i = 0; i < this.squares.length; i++) {
            if (this.squares[i].getVal() === null) {
                return false;
            }
        }

        return true;
    }

    deadend() {
        // determine if a deadend has been reached/if backtracking is necessary
        // (i.e. if there is a null value square with a nonempty potentialVals 
        // array and the puzzle is not yet complete)
        let allPotentialValsEmpty = true;
        for (let i = 0; i < this.squares.length; i++) {
            if ((this.squares[i].getPotentialVals().length > 0) && 
                (this.squares[i].getVal() !== null)) {
                allPotentialValsEmpty = false;
            }
        }

        if ((allPotentialValsEmpty === true) && (this.complete() === false)) {
            return true;
        } else {
            return false;
        }
    }

    backtrack() {
        // undo moves, and reset the corresponding squares, until a checkpoint
        // is reached
        let movesLastIndex = this.moves.length - 1;
        while (this.moves[movesLastIndex].getCheckpoint() === false) {
            this.squares[this.moves[movesLastIndex].getInd()].setVal(null);
            this.moves.pop();
            movesLastIndex--;
        }

        // undo the checkpoint move and reset its corresponding square
        this.squares[this.moves[movesLastIndex].getInd()].setVal(null);
        this.moves.pop();

        // reinitialize every square's potentialVals
        this.clearPotentialVals();
        this.initPotentialVals();
    }
}