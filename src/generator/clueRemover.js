import {Puzzle} from "../solver/puzzle.js";
import {generateSolution} from "./mfgGenerator.js";


// const puzzleStr = generateSolution(6);
// let inArr = [];
// for (let i = 0; i < puzzleStr.length; i++) {
//     inArr.push(parseInt(puzzleStr[i]));
// }

// const p = new Puzzle(inArr);
// p.testViewPuzzle();

// // for (let i = 0; i < 17; i++) {
// //     p.removeSquareWithUniqueness();
// // }
// console.log(p.removeSquareWithUniqueness());

export const newPuzzle = (size, n) => {
    const solutionStr = generateSolution(size);
    
    let puzzleArr = [];
    for (let i = 0; i < solutionStr.length; i++) {
        puzzleArr.push(parseInt(solutionStr[i]));
    }

    const p = new Puzzle(puzzleArr);
    // ERROR: GENERATING INVALID SOLUTIONS AND THUS INVALID PUZZLES
    if (p.checkInvalidPuzzle() === true) {
        return {
            "puzzle": solutionStr,
            "solution": ""
        };
    }

    for (let i = 0; i < 30; i++) {
        p.removeSquareWithUniqueness();
    }

    let puzzleStr = "";
    for (let i = 0; i < p.puzzleArr.length; i++) {
        if (p.puzzleArr[i] === null) {
            puzzleStr += ".";
        } else {
            puzzleStr += (p.puzzleArr[i]).toString();
        }
    }

    return {
        "puzzle": puzzleStr,
        "solution": solutionStr
    }
}

