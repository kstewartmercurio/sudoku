let n = 9;

const getBoxCoord = (i) => {
    if (n === 6) {
        switch (i) {
            case 0: case 1: case 2: case 6: case 7: case 8:
                return 0;
            case 3: case 4: case 5: case 9: case 10: case 11:
                return 1;
            case 12: case 13: case 14: case 18: case 19: case 20:
                return 2;
            case 15: case 16: case 17: case 21: case 22: case 23: 
                return 3;
            case 24: case 25: case 26: case 30: case 31: case 32:
                return 4;
            case 27: case 28: case 29: case 33: case 34: case 35:
                return 5;
            default:
                break;
        }
    } else if (n === 9) {
        switch (i) {
            case 0: case 1: case 2: case 9: case 10: case 11: case 18: 
                case 19: case 20:
                return 0;
            case 3: case 4: case 5: case 12: case 13: case 14: case 21:
                case 22: case 23:
                return 1;
            case 6: case 7: case 8: case 15: case 16: case 17: case 24:
                case 25: case 26:
                return 2;
            case 27: case 28: case 29: case 36: case 37: case 38: case 45:
                case 46: case 47:
                return 3;
            case 30: case 31: case 32: case 39: case 40: case 41: case 48:
                case 49: case 50:
                return 4;
            case 33: case 34: case 35: case 42: case 43: case 44: case 51:
                case 52: case 53:
                return 5;
            case 54: case 55: case 56: case 63: case 64: case 65: case 72:
                case 73: case 74:
                return 6;
            case 57: case 58: case 59: case 66: case 67: case 68: case 75:
                case 76: case 77:
                return 7;
            case 60: case 61: case 62: case 69: case 70: case 71: case 78:
                case 79: case 80:
                return 8;
            default:
                break;
        }
    }
}

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

const valid_location = (inPuzzle, i, r, c, b, number) => {
    for (let j = 0; j < inPuzzle[r].length; j++) {
        if (inPuzzle[r][j] === number) {
            return false;
        }
    }

    for (let j = 0; j < inPuzzle.length; j++) {
        if (inPuzzle[j][c] === number) {
            return false;
        }
    }

    for (let j = 0; j < ((n * n) - 1); j++) {
        if ((i !== j) && (getBoxCoord(i) === getBoxCoord(j))) {
            let jRow = Math.floor(j / n);
            let jCol = j % n;

            if (inPuzzle[jRow][jCol] === number) {
                return false;
            }
        }
    }

    return true;
}

const find_empty_square = (inPuzzle) => {
    for (let i = 0; i < inPuzzle.length; i++) {
        for (let j = 0; j < inPuzzle[i].length; j++) {
            if (inPuzzle[i][j] === 0) {
                return true;
            }
        }
    }

    return false;
}


const generate_solution = (inPuzzle) => {
    let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let r = null;
    let c = null;

    for (let i = 0; i < (n * n); i++) {
        let r = Math.floor(i / n);
        let c = i % n;
        let b = getBoxCoord(i);

        if (inPuzzle[r][c] === 0) {
            shuffleArr(numArr);

            let numFound = false;
            for (let j = 0; j < numArr.length; j++) {
                if (valid_location(inPuzzle, i, r, c, b, numArr[j]) === true) {
                    inPuzzle[r][c] = numArr[j];
                    numFound = true;

                    if (find_empty_square(inPuzzle) === false) {
                        return true;
                    } else {
                        if (generate_solution(inPuzzle) === true) {
                            return true;
                        }
                    }
                }
            }
            
            if (numFound === false) {
                inPuzzle[r][c] = 0;
                return false;
            }
        }
    }
}

const printPuzzle = (inPuzzle) => {
    console.log();
    for (let i = 0; i < inPuzzle.length; i++) {
        console.log(...inPuzzle[i]);
    }
    console.log();
}


let testPuzzle6 = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
]
let testPuzzle9 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
]

generate_solution(testPuzzle9);
printPuzzle(testPuzzle9);
