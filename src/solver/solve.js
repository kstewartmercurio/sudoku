import {Puzzle} from "./puzzle.js";

function main() {
    // easyPuzzle does not require any guessing to solve
    let easyPuzzle = ([
        null, null, 3, null, null, null, 2, null, null,
        null, 6, null, 9, 8, null, null, 4, 3,
        4, 9, null, null, 3, 1, null, null, 6,
        9, null, 7, null, null, null, 8, 6, null,
        null, 4, null, null, 9, 8, null, null, null,
        null, null, 5, 4, null, 7, 1, null, 9,
        6, null, null, null, null, 3, 9, null, 5,
        5, null, 8, 1, null, null, null, 7, 2,
        2, null, 9, null, 5, 6, null, 3, 8
    ]);
    // hardPuzzle requires guessing to solve
    let hardPuzzle = ([
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
    // not an instant solve
    let longPuzzle = ([
        null, null, null, null, 1, null, 4, 5, null,
        null, null, 2, 3, null, null, null, null, null,
        null, 8, null, null, null, null, 7, null, null,
        null, null, null, 8, null, null, null, 3, 2,
        7, 6, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null,
        5, null, null, null, 7, null, 6, null, null,
        null, null, null, null, null, 1, null, null, null,
        null, null, 3, null, null, null, null, null, null
    ]);
    
    const testBoard = new Puzzle(hardPuzzle);

    easyPuzzle = testBoard.solvePuzzle();
    console.log(easyPuzzle);
}