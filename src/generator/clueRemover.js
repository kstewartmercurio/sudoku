import {Puzzle} from "../solver/puzzle.js";
import {generateSolution} from "./mfgGenerator.js";


const puzzleStr = generateSolution(9);
let inArr = [];
for (let i = 0; i < puzzleStr.length; i++) {
    inArr.push(parseInt(puzzleStr[i]));
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
const walkthroughPuzzleArr = ([
    3, 0, 9, 8, 4, 6, 0, 0, 0, 
    0, 2, 7, 0, 5, 1, 4, 8, 9, 
    8, 5, 4, 9, 0, 2, 6, 0, 3, 
    7, 4, 0, 0, 6, 5, 2, 9, 0, 
    9, 6, 5, 0, 3, 8, 1, 0, 7, 
    0, 8, 2, 7, 9, 0, 0, 6, 5, 
    5, 0, 8, 6, 1, 0, 5, 3, 0, 
    2, 0, 6, 4, 2, 3, 8, 7, 0, 
    4, 3, 1, 5, 0, 0, 9, 0, 0 
]) // 30 squares removed


const p = new Puzzle(walkthroughPuzzleArr);
p.testViewPuzzle();

// for (let i = 0; i < 30; i++) {
//     p.removeSquareWithUniqueness();
// }
p.removeSquareWithUniqueness();

p.testViewPuzzle()

// console.log(p.removeSquareWithUniqueness());
// p.testViewPuzzle();