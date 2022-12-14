import {createReadStream, createWriteStream, write} from "fs";
import {createInterface} from "readline";
import {Puzzle} from "../solver/puzzle.js";

function puzzleStrToJSON(inStr) {
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

    r.on("line", function (text) {
        console.log(puzzleStrToJSON(text));
        r.output.write("test\n");
    });
}

main();

