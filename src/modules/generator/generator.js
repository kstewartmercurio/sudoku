import { faPassport } from "@fortawesome/free-solid-svg-icons";

let n = 9;

const shuffleArr = (inLst) => {
    let index = inLst.length;
    let randomIndex;

    while (index !== 0) {
        randomIndex = Math.floor(Math.random() * index);
        index--;

        [inLst[index], inLst[randomIndex]] = [inLst[randomIndex], inLst[index]];
    }

    return inLst;
}

const generateCoordsArr = () => {
    let retArr = [];

    for (let i = 0; i < (n * n); i++) {
        let r = Math.floor(i / n);
        let c = i % n;

        let b;
        if (n === 6) {
            switch (i) {
                case 0: case 1: case 2: case 6: case 7: case 8:
                    b = 0;
                    break;
                case 3: case 4: case 5: case 9: case 10: case 11:
                    b = 1;
                    break;
                case 12: case 13: case 14: case 18: case 19: case 20:
                    b = 2;
                    break;
                case 15: case 16: case 17: case 21: case 22: case 23:
                    b = 3;
                    break;
                case 24: case 25: case 26: case 30: case 31: case 32:
                    b = 4;
                    break;
                case 27: case 28: case 29: case 33: case 34: case 35:
                    b = 5;
                    break;
                default:
                    break;
            }
        } else if (n === 9) {
            switch (i) {
                case 0: case 1: case 2: case 9: case 10: case 11: case 18: 
                    case 19: case 20:
                    b = 0;
                    break;
                case 3: case 4: case 5: case 12: case 13: case 14: case 21:
                    case 22: case 23:
                    b = 1;
                    break;
                case 6: case 7: case 8: case 15: case 16: case 17: case 24:
                    case 25: case 26:
                    b = 2;
                    break;
                case 27: case 28: case 29: case 36: case 37: case 38: case 45:
                    case 46: case 47:
                    b = 3;
                    break;
                case 30: case 31: case 32: case 39: case 40: case 41: case 48:
                    case 49: case 50:
                    b = 4;
                    break;
                case 33: case 34: case 35: case 42: case 43: case 44: case 51:
                    case 52: case 53:
                    b = 5;
                    break;
                case 54: case 55: case 56: case 63: case 64: case 65: case 72:
                    case 73: case 74:
                    b = 6;
                    break;
                case 57: case 58: case 59: case 66: case 67: case 68: case 75:
                    case 76: case 77:
                    b = 7;
                    break;
                case 60: case 61: case 62: case 69: case 70: case 71: case 78:
                    case 79: case 80:
                    b = 8;
                    break;
                default:
                    break;
            }
        }

        retArr.push([r, c, b]);
    }

    return retArr;
}

const generatePotentialVals = () => {
    let retArr = [];

    for (let i = 0; i < (n * n); i++) {
        retArr.push([0, shuffleArr([1, 2, 3, 4, 5, 6, 7, 8, 9])]);
    }

    return retArr;
}

const checkValForSquare = (i, n) => {
    let coordsArr = generateCoordsArr();

    for (let j = 0; j < coordsArr.length; j++) {
        if (i !== j) {
            if ((coordsArr[i][0] === coordsArr[j][0]) ||
                (coordsArr[i][1] === coordsArr[j][1]) ||
                (coordsArr[i][2] === coordsArr[j][2])) {
                if (n === puzzle[j]) {
                    return false;
                }            
            }
        }
    }

    return true;
}

const backtrack = (inPuzzle) => {
    return 0;
}

const generate = (inPuzzle) => {
    let index = 0
    let potentialValsArr = generatePotentialVals();


    while (true) {
        if (potentialValsArr[index][0] === 8) {
            return inPuzzle;
        }

        let curPotentialValsIndex = potentialValsArr[index][0];
        let nextVal = potentialValsArr[index][1][curPotentialValsIndex];
        potentialValsArr[index][0]++;

        if (checkValForSquare(index, nextVal) === true) {
            inPuzzle[index] = nextVal;
            index++;
        }
    }
}




const printPuzzle = (inPuzzle) => {
    console.log();
    let curStr = "";
    for (let i = 0; i < inPuzzle.length; i++) {
        curStr += inPuzzle[i] + " ";

        if (i % n === (n - 1)) {
            console.log(curStr);
            curStr = "";
        }
    }
    console.log();
}


let puzzle = Array(n * n).fill(0);
printPuzzle(generate(puzzle));