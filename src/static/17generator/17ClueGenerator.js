import {createReadStream, createWriteStream, write} from "fs";
import {createInterface} from "readline";
import {Puzzle} from "../solver/puzzle.js";

import {seventeenPuzzles} from "./17puzzles.js";

function puzzleStrToJSON(n, inStr) {
    let puzzleArr = [];
    for (let i = 0; i < inStr.length; i++) {
        if (inStr[i] === ".") {
            puzzleArr.push(null);
        } else {
            puzzleArr.push(parseInt(inStr[i]));
        }  
    }

    let puzzleObj = new Puzzle(puzzleArr);
    let solutionJSON = puzzleObj.solvePuzzle();

    let solutionStr = "";
    let solutionArr = solutionJSON["puzzleArr"];
    for (let i = 0; i < solutionArr.length; i++) {
        solutionStr += solutionArr[i].toString();
    }

    return {
        "id": n,
        "puzzle": inStr,
        "solution": solutionStr
    }
}

function main() {
    var user_file = "./17puzzlesTEST.txt";
    var r = createInterface({
        input: createReadStream(user_file),
        output: createWriteStream("./output.txt", {flags: "w"})
    });

    let i = 41;
    r.on("line", function (text) {
        console.log("starting #" + i.toString());
        r.output.write(JSON.stringify(puzzleStrToJSON(i, text)) + "\n");
        console.log("finished #" + i.toString());
        i++;
    });
}

// main();
console.log(seventeenPuzzles);

