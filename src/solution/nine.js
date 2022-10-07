import {Square} from "./square.js";

export class Nine {
    constructor() {
        this.contents = []
    }

    TESTVIEWN() {
        let outStr = ""
        for (let i = 0; i < (this.contents.length); i++) {
            let val = (this.contents[i].getVal())

            if (val === null) {
                outStr += "X ";
            } else {
                outStr += (val.toString() + " ");
            }
        }
        console.log(outStr);
    }

    add(s) {
        // add input Square object s to this.contents
        this.contents.push(s);
    }

    contains(n) {
        // check if value n exists in the Nine object
        for (let i = 0; i < this.contents.length; i++) {
            if (this.contents[i].getVal() === n) {
                return true;
            }
        }
        
        return false;
    }
}