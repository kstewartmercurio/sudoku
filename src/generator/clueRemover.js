import {Puzzle} from "../solver/puzzle.js";
import {generateSolution} from "./mfgGenerator.js";


const puzzleStr = generateSolution(9);
let inArr = [];
for (let i = 0; i < puzzleStr.length; i++) {
    inArr.push(parseInt(puzzleStr[i]));
}

const easyPuzzle = ([
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
const hardPuzzle = ([
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
const singleSolutionPuzzle = ([
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
const doubleSolutionPuzzle = ([
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
const testPuzzle = ([
    7, 4, 2, 1, 9, 3, 5, 8, 6, 
    3, 6, 9, 7, 5, 8, 1, 4, 2, 
    5, 1, 8, 2, 4, 6, 7, 9, 3, 
    9, 5, 4, 6, 2, 1, 9, 3, 7, 
    1, 8, 6, 5, 3, 7, 4, 2, 8, 
    2, 7, 3, 4, 8, 9, 6, 1, 5, 
    6, 9, 1, 8, 7, 2, 3, 5, 4, 
    8, 2, 5, 3, 1, 4, 6, 7, 9, 
    4, 3, 7, 9, 6, 5, 8, 2, 1
])


const p = new Puzzle(testPuzzle);
p.testViewPuzzle();
// console.log(p.checkUniqueSolution());
for (let i = 0; i < 43; i++) {
    p.removeSquareWithUniqueness();
}

p.testViewPuzzle();