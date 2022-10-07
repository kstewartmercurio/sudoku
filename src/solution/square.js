export class Square {
    constructor() {
        this.ind = -1;
        this.val = null;
        this.guessCount = 0;

        this.coords = []; // row, column, box
        this.potentialVals = [];
    }

    TESTVIEWS() {
        console.log(`${this.ind}: [${this.coords}], ${this.val}, [${this.potentialVals}]`);
    }

    getInd() {
        return this.ind;
    }

    getVal() {
        return this.val;
    }

    getGuessCount() {
        return this.guessCount;
    }

    getCoords() {
        return this.coords;
    }

    getPotentialVals() {
        return this.potentialVals;
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

    addPotentialVal(n) {
        this.potentialVals.push(n);
    }

    resetPotentialVals() {
        this.potentialVals = [];
    }

    incrementGuessCount() {
        this.guessCount++;
    }

    resetGuessCount() {
        this.guessCount = 0;
    }
}