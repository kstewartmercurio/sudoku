export class Square {
    constructor() {
        this.ind = -1;
        this.val = null;
        this.guessCount = 0;

        this.coords = []; // row, column, box
        this.potentialVals = [];
    }

    TESTVIEWS() {
        console.log(`${this.ind}: [${this.coords}]`);
    }

    setInd(ind) {
        this.ind = ind;
    }

    setVal(val) {
        this.val = val;
    }

    setCoord(r, c, b) {
        this.coords.push(r);
        this.coords.push(c);
        this.coords.push(b);
    }
}