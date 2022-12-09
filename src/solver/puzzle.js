import {Square} from "./square.js";
import {Nine} from "./nine.js";
import {Move} from "./move.js";

export class Puzzle {
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

    solvePuzzle() {
        this.solveSingles();

        while (this.complete() === false) {
            this.guess();
            this.solveSingles();

            if ((this.deadend() === true) && 
                (this.checkMovesForCheckpoints() === false) &&
                (this.complete() === false)) {
                    console.log("error");
                    break;
                }
            if (this.deadend() === true) {
                this.backtrack();
            }
        }

        for (let i = 0; i < this.puzzleArr.length; i++) {
            this.puzzleArr[i] = this.squares[i].getVal();
        }
        console.log(this.moves);
        return this.puzzleArr;
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
                (this.squares[i].getVal() === null)) {
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
        while (this.moves[(this.moves.length - 1)].getCheckpoint() === false) {
            this.squares[this.moves[(this.moves.length - 1)].getInd()].setVal(null);
            this.moves.pop();
            
            if (this.moves.length === 0) {
                break;
            }
        }

        // undo the checkpoint move and reset its corresponding square
        if (this.moves.length > 0) {
            if (this.moves[(this.moves.length - 1)].getCheckpoint() === true) {
                this.squares[this.moves[(this.moves.length - 1)].getInd()].setVal(null);
                this.moves.pop();
            }
        }

        // reinitialize every square's potentialVals
        this.clearPotentialVals();
        this.initPotentialVals();
    }



    testViewPuzzle() {
        console.log();
        for (let i = 0; i < this.rows.length; i++) {
            let curStr = "";
            for (let j = 0; j < this.rows[i].contents.length; j++) {
                if (this.rows[i].contents[j].getVal() === null) {
                    curStr += "0 ";
                } else {
                    curStr += (this.rows[i].contents[j].getVal().toString() + " ");
                }
            }
            console.log(curStr);
        }
        console.log();
    }

    getIndexToRemove() {
        let k = Math.floor(Math.random() * (this.squares.length - 1));

        while (this.squares[k].getVal() === null) {
            if (k === 80) {
                k = 0;
            } else {
                k++;
            }
        }

        return k;
    }

    removeSquareAtIndex(k) {
        this.puzzleArr[k] = null;
        this.squares[k].setVal(null);
    }

    checkMovesForCheckpoints() {
        // returns true if the moves stack contains checkpoints
        for (let i = 0; i < this.moves.length; i++) {
            if (this.moves[i].checkpoint === true) {
                return true;
            }
        }
        
        return false;
    }

    checkUniqueSolution() {
        // return true if exactly one solution exists, otherwise return false

        // find first solution
        // let cont1 = true;
        let cont1 = !this.complete();
        while (cont1 === true) {
            // sometimes staying here in an infinite loop
            this.guess();
            this.solveSingles();

            if (((this.deadend() === true) && 
                (this.checkMovesForCheckpoints() === false)) ||
                (this.complete() === true)) {
                cont1 = false;
            } else if (this.deadend() === true) {
                this.backtrack();
            }
        }

        // determine if guesses were made to find the first solution
        // if guesses were not made then there are no more solutions to find
        if (this.checkMovesForCheckpoints() === false) {
            return true;
        } else {
            this.backtrack();
        }

        // attempt to find a second solution
        this.solveSingles();
        let cont2 = !this.complete();
        while (cont2 === true) {
            this.guess();
            this.solveSingles();
            
            if (((this.deadend() === true) && 
                (this.checkMovesForCheckpoints() === false)) ||
                (this.complete() === true)) {
                cont2 = false;
            } else if (this.deadend() === true) {
                this.backtrack();
            }
        }

        // if the puzzle is now complete then a second solution has been found
        if (this.complete() === true) {
            return false;
        } else {
            return true;
        }
    }
    
    removeSquareWithUniqueness() {
        /*
            generate index to remove
            create a duplicate puzzle with the square at that index removed
            determine if multiple solutions exist to the duplicate puzzle
            
            if multiple solutions exist then return to the beginning and 
                generate a new index to remove
            otherwise the index to remove can be removed from the actual puzzle
        */

        let cont1 = true;
        let cont2 = true;
        let k;
        let dupPuzzleArr;
        let dupPuzzle;
        let attemptedIndices = {};
        while (cont1 === true) {
            // k = this.getIndexToRemove();
            while (cont2 === true) {
                k = this.getIndexToRemove();
                if ((k in attemptedIndices) === false) {
                    attemptedIndices[k] = true;
                    cont2 = false;
                }
            }

            dupPuzzleArr = this.puzzleArr;
            dupPuzzleArr[k] = null;
            dupPuzzle = new Puzzle(dupPuzzleArr);

            if (dupPuzzle.checkUniqueSolution() === true) {
                cont1 = false;
            }
        }

        this.puzzleArr[k] = null;
        this.squares[k].setVal(null);
    }
}

const testPuzzleArr = ([
    2, null, null, 5, null, 7, 4, null, 6,
    null, null, null, null, 3, 1, null, null, null,
    null, null, null, null, null, null, 2, 3, null,
    null, null, null, null, 2, null, null, null, null,
    8, 6, null, 3, 1, null, null, null, null,
    null, 4, 5, null, null, null, null, null, null,
    null, null, 9, null, null, null, 7, null, null,
    null, null, 6, 9, 5, null, null, null, 2,
    null, null, 1, null, null, 6, null, null, 8
]);
let testPuzzle = new Puzzle(testPuzzleArr);
testPuzzle.testViewPuzzle();

// testPuzzle.guess();

console.log(testPuzzle.moves);
for (let i = 0; i < testPuzzle.squares.length; i++) {
    console.log(i, " : ", ...testPuzzle.squares[i].getPotentialVals());
}

testPuzzle.testViewPuzzle();