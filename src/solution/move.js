export class Move {
    constructor(ind, val, checkpoint) {
        this.ind = ind;
        this.val = val;
        this.checkpoint = checkpoint;
    }

    getInd() {
        return this.ind;
    }

    getCheckpoint() {
        return this.checkpoint;
    }

    TESTVIEWM() {
        let outStr = ("square: " + this.ind.toString() + ", value: " + 
            this.val.toString() + ", checkpoint: ");
        if (this.checkpoint === true) {
            outStr += "true";
        } else {
            outStr += "false";
        }
        console.log(outStr);
    }
}