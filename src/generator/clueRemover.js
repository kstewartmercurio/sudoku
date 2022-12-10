import {Puzzle} from "../solver/puzzle.js";
import {generateSolution} from "./mfgGenerator.js";

export const newPuzzle = (size, n) => {
    const solutionStr = generateSolution(size);
    
    let puzzleArr = [];
    for (let i = 0; i < solutionStr.length; i++) {
        puzzleArr.push(parseInt(solutionStr[i]));
    }

    const p = new Puzzle(puzzleArr);

    for (let i = 0; i < n; i++) {
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


