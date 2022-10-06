import {Square} from "./square.js";

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

        // construct potential vectors
    }

    TESTVIEWB() {
        for (let i = 0; i < this.squares.length; i++) {
            this.squares[i].TESTVIEWS();
        }
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
}