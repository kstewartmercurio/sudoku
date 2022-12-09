import {Puzzle} from "./puzzle.js";

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
const singleSolutionPuzzleArr = ([
    2, 9, 5, 7, 4, 3, 8, 6, 1,
    4, 3, 1, 8, 6, 5, 9, 2, null,
    8, 7, 6, 1, 9, 2, 5, 4, 3,
    3, 8, 7, 4, 5, 9, 2, 1, 6,
    6, 1, 2, 3, 8, 7, 4, 9, 5,
    5, 4, 9, 2, 1, 6, 7, 3, 8,
    7, 6, 3, 5, 2, 4, 1, 8, 9,
    9, 2, 8, 6, 7, 1, 3, 5, 4,
    1, 5, 4, 9, 3, 8, 6, null, null
])
const doubleSolutionPuzzleArr = ([
    2, 9, 5, 7, 4, 3, 8, 6, 1,
    4, 3, 1, 8, 6, 5, 9, null, null,
    8, 7, 6, 1, 9, 2, 5, 4, 3,
    3, 8, 7, 4, 5, 9, 2, 1, 6,
    6, 1, 2, 3, 8, 7, 4, 9, 5,
    5, 4, 9, 2, 1, 6, 7, 3, 8,
    7, 6, 3, 5, 2, 4, 1, 8, 9,
    9, 2, 8, 6, 7, 1, 3, 5, 4,
    1, 5, 4, 9, 3, 8, 6, null, null
]);

let testPuzzle = new Puzzle(doubleSolutionPuzzleArr);
testPuzzle.testViewPuzzle();

console.log(testPuzzle.checkUniqueSolution());