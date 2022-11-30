let n = 9;

class Square {
    constructor(x) {
        this.ind = -1;
        this.val = x;
        this.visited = false;
    }
}

class Puzzle {
    constructor() {
        this.squares = [];
        this.rows = [];
        this.cols = [];
        this.boxes = [];
    }

    swap = (ind1, ind2) => {
        console.log();
        for (let i = 0; i < this.rows.length; i++) {
            console.log(...squaresArrToValsArr(this.rows[i]));
        }
        console.log("swapping (" + ind1.toString() + ", " + 
            this.squares[ind1].val.toString() + ") & (" + ind2.toString() +
            ", " + this.squares[ind2].val.toString() + ")");

        let bi1, bj1, bi2, bj2;
        for (let i = 0; i < this.boxes.length; i++) {
            for (let j = 0; j < this.boxes[i].length; j++) {
                if (this.boxes[i][j].ind === ind1) {
                    bi1 = i;
                    bj1 = j;
                }
                if (this.boxes[i][j].ind === ind2) {
                    bi2 = i;
                    bj2 = j;
                }
            }
        }

        // swap squares within this.boxes
        [this.boxes[bi1][bj1], this.boxes[bi2][bj2]] = [
            this.boxes[bi2][bj2], this.boxes[bi1][bj1]
        ];

        // swap square.ind values
        [this.squares[ind1].ind, this.squares[ind2].ind] = [
            this.squares[ind2].ind, this.squares[ind1].ind
        ];

        // swap squares within this.squares
        [this.squares[ind1], this.squares[ind2]] = [
            this.squares[ind2], this.squares[ind1]
        ];

        let r1 = Math.floor(ind1 / n);
        let c1 = ind1 % n;
        let r2 = Math.floor(ind2 / n);
        let c2 = ind2 % n;

        // swap squares within this.rows
        [this.rows[r1][c1], this.rows[r2][c2]] = [
            this.rows[r2][c2], this.rows[r1][c1]
        ];

        // swap squares within this.cols
        [this.cols[c1][r1], this.cols[c2][r2]] = [
            this.cols[c2][r2], this.cols[c1][r1]
        ];

        for (let i = 0; i < this.rows.length; i++) {
            console.log(...squaresArrToValsArr(this.rows[i]));
        }
        console.log();
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
    let retArr = [];

    if (n === 6) {
        retArr = [
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
    } else if (n === 9) {
        retArr = [
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
    }

    let accum = 0;
    for (let i = 0; i < retArr.length; i++) {
        for (let j = 0; j < retArr[i].length; j++) {
            retArr[i][j].ind = accum;
            accum++;
        }
    }

    return retArr;
}

const randomBoardToPuzzle = () => {
    let retPuzzle = new Puzzle();
    let randomBoard = generateRandomBoard();

    for (let i = 0; i < randomBoard.length; i++) {
        for (let j = 0; j < randomBoard[i].length; j++) {
            retPuzzle.squares.push(randomBoard[i][j]);
        }
    }

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



const getSubsequentBoxSquares = (p, dupIndex) => {
    let subsequentBoxSquares = [];
    let indFound = false;

    for (let i = 0; i < p.boxes.length; i++) {
        for (let j = 0; j < p.boxes[i].length; j++) {
            if (indFound === true) {
                subsequentBoxSquares.push(p.boxes[i][j]);
            }

            if (p.boxes[i][j].ind === dupIndex) {
                indFound = true;
            }
        }

        if (indFound === true) {
            break;
        }
    }

    return subsequentBoxSquares;
}

const attemptBoxSwap = (p, curDict, dupSquare, validReplacements) => {
    for (let i = 0; i < validReplacements.length; i++) {
        if ((validReplacements[i].val in curDict) === false) {
            p.swap(dupSquare.ind, validReplacements[i].ind);
            return true;
        }
    }

    console.log("attempted to swap (" + dupSquare.ind.toString() +
        ", " + dupSquare.val.toString() + ") and failed");
    return false;
}


const sort = (p) => {
    let traversalOrder = [];
    for (let i = 0; i < n; i++) {
        traversalOrder.push(p.rows[i]);
        traversalOrder.push(p.cols[i]);
    }

    // let accum = 0;
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
                // BAS required
                let validReplacements = getSubsequentBoxSquares(p, curSet[j].ind);
                 if (attemptBoxSwap(p, curDict, curSet[j], validReplacements) === false) {
                    return 0;
                 };
                

                // if (accum === 3) {
                //     return 0;
                // } else {
                //     accum += 1;
                // }
            }
        }

        for (let j = 0; j < curSet.length; j++) {
            curSet[j].visited = true;
        }
    }
}





// create new puzzle
let p = randomBoardToPuzzle();


for (let i = 0; i < p.rows.length; i++) {
    console.log(...squaresArrToValsArr(p.rows[i]));
}
console.log();
// for (let i = 0; i < p.cols.length; i++) {
//     console.log(...squaresArrToValsArr(p.cols[i]));
// }
// console.log();
// for (let i = 0; i < p.boxes.length; i++) {
//     console.log(...squaresArrToValsArr(p.boxes[i]));
// }

// sort(p);

// console.log();
// for (let i = 0; i < p.rows.length; i++) {
//     console.log(...squaresArrToValsArr(p.rows[i]));
// }

console.log(...squaresArrToValsArr(getSubsequentBoxSquares(p, 18)));