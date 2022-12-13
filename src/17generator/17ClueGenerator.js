import { createReadStream } from "fs";
import { createInterface } from "readline";
import {Puzzle} from "../solver/puzzle.js";


console.log("reading in 17clue.txt");
var user_file = "./17puzzlesTEST.txt";
var r = createInterface({
    input: createReadStream(user_file)
});
r.on("line", function (text) {
    console.log(text);

    let puzzleArr = []
    for (let i = 0; i < text.length; i++) {
        if (text[i] === ".") {
            puzzleArr.push(null);
        } else {
            puzzleArr.push(parseInt(text[i]));
        }  
    }

    let puzzleObj = new Puzzle(puzzleArr);
    let solutionJSON = puzzleObj.solvePuzzle();

    let solutionStr = "";
    let solutionArr = solutionJSON["puzzleArr"];
    for (let i = 0; i < solutionArr.length; i++) {
        solutionStr += solutionArr[i].toString();
    }

    console.log(solutionStr);
});