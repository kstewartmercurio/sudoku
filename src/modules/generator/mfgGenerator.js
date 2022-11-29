let n = 9;

class Puzzle {
    constructor() {
        this.rows = [];
        this.cols = [];
        this.boxes = [];
    }
}

class Square {
    constructor(x) {
        this.val = x;
    }

    getBoxCoord = (i) => {
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
}



const shuffleArr = (inArr) => {
    let index = inArr.length;
    let randomIndex;

    while (index !== 0) {
        randomIndex = Math.floor(Math.random() * index);
        index--;

        [inArr[index], inArr[randomIndex]] = [inArr[randomIndex], inArr[index]];
    }

    return inArr;
}

const squaresArrToValsArr = (inArr) => {
    let retArr = [];
    for (i = 0; i < inArr.length; i++) {
        retArr.push(inArr[i].val);
    }

    return retArr;
}

const generateRandomBoard = () => {
    if (n === 6) {
        let retArr = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ]

        // box 0
        let squareArr0 = shuffleArr([new Square(1), new Square(2),
            new Square(3), new Square(4), new Square(5), new Square(6)]);
        retArr[0][0] = squareArr0[0];
        retArr[0][1] = squareArr0[1];
        retArr[0][2] = squareArr0[2];
        retArr[1][0] = squareArr0[3];
        retArr[1][1] = squareArr0[4];
        retArr[1][2] = squareArr0[5];
        // box 1
        let squareArr1 = shuffleArr([new Square(1), new Square(2),
            new Square(3), new Square(4), new Square(5), new Square(6)]);
        retArr[0][3] = squareArr1[0];
        retArr[0][4] = squareArr1[1];
        retArr[0][5] = squareArr1[2];
        retArr[1][3] = squareArr1[3];
        retArr[1][4] = squareArr1[4];
        retArr[1][5] = squareArr1[5];
        // box 2
        let squareArr2 = shuffleArr([new Square(1), new Square(2),
            new Square(3), new Square(4), new Square(5), new Square(6)]);
        retArr[2][0] = squareArr2[0];
        retArr[2][1] = squareArr2[1];
        retArr[2][2] = squareArr2[2];
        retArr[3][0] = squareArr2[3];
        retArr[3][1] = squareArr2[4];
        retArr[3][2] = squareArr2[5];
        // box 3
        let squareArr3 = shuffleArr([new Square(1), new Square(2),
            new Square(3), new Square(4), new Square(5), new Square(6)]);
        retArr[2][3] = squareArr3[0];
        retArr[2][4] = squareArr3[1];
        retArr[2][5] = squareArr3[2];
        retArr[3][3] = squareArr3[3];
        retArr[3][4] = squareArr3[4];
        retArr[3][5] = squareArr3[5];
        // box 4
        let squareArr4 = shuffleArr([new Square(1), new Square(2),
            new Square(3), new Square(4), new Square(5), new Square(6)]);
        retArr[4][0] = squareArr4[0];
        retArr[4][1] = squareArr4[1];
        retArr[4][2] = squareArr4[2];
        retArr[5][0] = squareArr4[3];
        retArr[5][1] = squareArr4[4];
        retArr[5][2] = squareArr4[5];
        // box 5
        let squareArr5 = shuffleArr([new Square(1), new Square(2),
            new Square(3), new Square(4), new Square(5), new Square(6)]);
        retArr[4][3] = squareArr5[0];
        retArr[4][4] = squareArr5[1];
        retArr[4][5] = squareArr5[2];
        retArr[5][3] = squareArr5[3];
        retArr[5][4] = squareArr5[4];
        retArr[5][5] = squareArr5[5];

        return retArr;
    } else if (n === 9) {
        let retArr = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];

        // box 0
        let squareArr0 = shuffleArr([new Square(1), new Square(2), 
            new Square(3), new Square(4), new Square(5), new Square(6), 
            new Square(7), new Square(8), new Square(9)]);
        retArr[0][0] = squareArr0[0];
        retArr[0][1] = squareArr0[1];
        retArr[0][2] = squareArr0[2];
        retArr[1][0] = squareArr0[3];
        retArr[1][1] = squareArr0[4];
        retArr[1][2] = squareArr0[5];
        retArr[2][0] = squareArr0[6];
        retArr[2][1] = squareArr0[7];
        retArr[2][2] = squareArr0[8];
        // box 1
        let squareArr1 = shuffleArr([new Square(1), new Square(2), 
            new Square(3), new Square(4), new Square(5), new Square(6), 
            new Square(7), new Square(8), new Square(9)]);
        retArr[0][3] = squareArr1[0];
        retArr[0][4] = squareArr1[1];
        retArr[0][5] = squareArr1[2];
        retArr[1][3] = squareArr1[3];
        retArr[1][4] = squareArr1[4];
        retArr[1][5] = squareArr1[5];
        retArr[2][3] = squareArr1[6];
        retArr[2][4] = squareArr1[7];
        retArr[2][5] = squareArr1[8];
        // box 2
        let squareArr2 = shuffleArr([new Square(1), new Square(2), 
            new Square(3), new Square(4), new Square(5), new Square(6), 
            new Square(7), new Square(8), new Square(9)]);
        retArr[0][6] = squareArr2[0];
        retArr[0][7] = squareArr2[1];
        retArr[0][8] = squareArr2[2];
        retArr[1][6] = squareArr2[3];
        retArr[1][7] = squareArr2[4];
        retArr[1][8] = squareArr2[5];
        retArr[2][6] = squareArr2[6];
        retArr[2][7] = squareArr2[7];
        retArr[2][8] = squareArr2[8];
        // box 3
        let squareArr3 = shuffleArr([new Square(1), new Square(2), 
            new Square(3), new Square(4), new Square(5), new Square(6), 
            new Square(7), new Square(8), new Square(9)]);
        retArr[3][0] = squareArr3[0];
        retArr[3][1] = squareArr3[1];
        retArr[3][2] = squareArr3[2];
        retArr[4][0] = squareArr3[3];
        retArr[4][1] = squareArr3[4];
        retArr[4][2] = squareArr3[5];
        retArr[5][0] = squareArr3[6];
        retArr[5][1] = squareArr3[7];
        retArr[5][2] = squareArr3[8];
        // box 4
        let squareArr4 = shuffleArr([new Square(1), new Square(2), 
            new Square(3), new Square(4), new Square(5), new Square(6), 
            new Square(7), new Square(8), new Square(9)]);
        retArr[3][3] = squareArr4[0];
        retArr[3][4] = squareArr4[1];
        retArr[3][5] = squareArr4[2];
        retArr[4][3] = squareArr4[3];
        retArr[4][4] = squareArr4[4];
        retArr[4][5] = squareArr4[5];
        retArr[5][3] = squareArr4[6];
        retArr[5][4] = squareArr4[7];
        retArr[5][5] = squareArr4[8];
        // box 5
        let squareArr5 = shuffleArr([new Square(1), new Square(2), 
            new Square(3), new Square(4), new Square(5), new Square(6), 
            new Square(7), new Square(8), new Square(9)]);
        retArr[3][6] = squareArr5[0];
        retArr[3][7] = squareArr5[1];
        retArr[3][8] = squareArr5[2];
        retArr[4][6] = squareArr5[3];
        retArr[4][7] = squareArr5[4];
        retArr[4][8] = squareArr5[5];
        retArr[5][6] = squareArr5[6];
        retArr[5][7] = squareArr5[7];
        retArr[5][8] = squareArr5[8];
        // box 6
        let squareArr6 = shuffleArr([new Square(1), new Square(2), 
            new Square(3), new Square(4), new Square(5), new Square(6), 
            new Square(7), new Square(8), new Square(9)]);
        retArr[6][0] = squareArr6[0];
        retArr[6][1] = squareArr6[1];
        retArr[6][2] = squareArr6[2];
        retArr[7][0] = squareArr6[3];
        retArr[7][1] = squareArr6[4];
        retArr[7][2] = squareArr6[5];
        retArr[8][0] = squareArr6[6];
        retArr[8][1] = squareArr6[7];
        retArr[8][2] = squareArr6[8];
        // box 7
        let squareArr7 = shuffleArr([new Square(1), new Square(2), 
            new Square(3), new Square(4), new Square(5), new Square(6), 
            new Square(7), new Square(8), new Square(9)]);
        retArr[6][3] = squareArr7[0];
        retArr[6][4] = squareArr7[1];
        retArr[6][5] = squareArr7[2];
        retArr[7][3] = squareArr7[3];
        retArr[7][4] = squareArr7[4];
        retArr[7][5] = squareArr7[5];
        retArr[8][3] = squareArr7[6];
        retArr[8][4] = squareArr7[7];
        retArr[8][5] = squareArr7[8];
        // box 8
        let squareArr8 = shuffleArr([new Square(1), new Square(2), 
            new Square(3), new Square(4), new Square(5), new Square(6), 
            new Square(7), new Square(8), new Square(9)]);
        retArr[6][6] = squareArr8[0];
        retArr[6][7] = squareArr8[1];
        retArr[6][8] = squareArr8[2];
        retArr[7][6] = squareArr8[3];
        retArr[7][7] = squareArr8[4];
        retArr[7][8] = squareArr8[5];
        retArr[8][6] = squareArr8[6];
        retArr[8][7] = squareArr8[7];
        retArr[8][8] = squareArr8[8];

        return retArr;
    }
}

const randomBoardToPuzzle = () => {
    let retPuzzle = new Puzzle();
    let randomBoard = generateRandomBoard();

    for (let i = 0; i < randomBoard.length; i++) {
        retPuzzle.rows.push(randomBoard[i]);
    }

    let curCol = [];
    for (let i = 0; i < randomBoard.length; i++) {
        for (let j = 0; j < randomBoard[i].length; j++) {
            curCol.push(randomBoard[j][i]);
        }

        retPuzzle.cols.push(curCol);
        curCol = [];
    }

    let curBox = [];
    let indArr = [];
    if (n === 6) {
        indArr = [
            [0, 1, 2, 6, 7, 8],
            [3, 4, 5, 9, 10, 11],
            [12, 13, 14, 18, 19, 20],
            [15, 16, 17, 21, 22, 23],
            [24, 25, 26, 30, 31, 32],
            [27, 28, 29, 33, 34, 35]
        ];
    } else if (n === 9) {
        indArr = [
            [0, 1, 2, 9, 10, 11, 18, 19, 20],
            [3, 4, 5, 12, 13, 14, 21, 22, 23],
            [6, 7, 8, 15, 16, 17, 24, 25, 26],
            [27, 28, 29, 36, 37, 38, 45, 46, 47],
            [30, 31, 32, 39, 40, 41, 48, 49, 50],
            [33, 34, 35, 42, 43, 44, 51, 52, 53],
            [54, 55, 56, 63, 64, 65, 72, 73, 74],
            [57, 58, 59, 66, 67, 68, 75, 76, 77],
            [60, 61, 62, 69, 70, 71, 78, 79, 80]
        ];
    }
    for (let i = 0; i < indArr.length; i++) {
        for (let j = 0; j < indArr[i].length; j++) {
            let r = Math.floor(indArr[i][j] / n);
            let c = indArr[i][j] % n;
            curBox.push(randomBoard[r][c]);
        }

        retPuzzle.boxes.push(curBox);
        curBox = [];
    }

    return retPuzzle;
}

const sort = (p) => {
    let traversalOrder = [];
    for (let i = 0; i < n; i++) {
        traversalOrder.push(p.rows[i]);
        traversalOrder.push(p.cols[i]);
    }


    for (let i = 0; i < traversalOrder.length; i++) {
        // the current row or column in the traversal
        let curSet = traversalOrder[i];

        // store indicies for each registered value
        let curDict = {}
        for (let j = 0; j < curSet.length; j++) {
            // if the current value is not already registered in the row/column
            if ((curSet[j].val in curDict) === false) {
                curDict[curSet[j].val] = j;
            } else {
                console.log(curSet);
                console.log(curDict);
                return 0;
            }
        }
    }
}





// create new puzzle
let p = randomBoardToPuzzle();

// print rows
console.log();
for (let i = 0; i < p.rows.length; i++) {
    console.log(...squaresArrToValsArr(p.rows[i]));
}
console.log();

sort(p);