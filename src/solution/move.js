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
}