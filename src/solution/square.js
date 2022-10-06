export class Square {
    constructor() {
        this.ind = -1;
        this.val = -1;
        this.guessCount = 0;
    }

    set setInd(ind) {
        this.ind = ind;
    }

    set setVal(val) {
        this.val = val;
    }
}