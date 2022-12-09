import {Puzzle} from "./puzzle.js";

const testPuzzleArr = ([
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
let testPuzzle = new Puzzle(testPuzzleArr);
testPuzzle.testViewPuzzle();

testPuzzle.solvePuzzle();

testPuzzle.testViewPuzzle();