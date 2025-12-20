"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = hello;
exports.merge = merge;
var world = "world";
var col1 = [1, 5, 7]; //min to max
var col2 = [8, 6, 3, 2]; //max to min
var col3 = [0, 4, 9, 2]; //min to max
function hello(who) {
    if (who === void 0) { who = world; }
    return "Hello ".concat(who, "!");
}
function merge(collection_1, collection_2, collection_3) {
    collection_2.reverse();
    var sorted = [];
    var numCol1 = collection_1.pop();
    if (numCol1 === undefined) {
        numCol1 = -1;
    }
    var numCol2 = collection_2.pop();
    if (numCol2 === undefined) {
        numCol2 = -1;
    }
    var numCol3 = collection_3.pop();
    if (numCol3 === undefined) {
        numCol3 = -1;
    }
    //pick next number
    while (true) {
        // console.log(numCol1)
        // console.log(numCol2)
        // console.log(numCol3)
        //compare
        if (numCol1 == -1 && numCol2 == -1 && numCol3 == -1) {
            break;
        }
        var push = 0;
        if (numCol1 > numCol2 && numCol1 > numCol3) {
            push = 1;
        }
        else if (numCol2 > numCol1 && numCol2 > numCol3) {
            push = 2;
        }
        else if (numCol3 > numCol1 && numCol3 > numCol1) {
            push = 3;
        }
        else {
            break;
        }
        //pop next
        if (push == 1) {
            sorted.push(numCol1);
            numCol1 = collection_1.pop();
            if (numCol1 === undefined) {
                numCol1 = -1;
            }
        }
        else if (push == 2) {
            sorted.push(numCol2);
            numCol2 = collection_2.pop();
            if (numCol2 === undefined) {
                numCol2 = -1;
            }
        }
        else if (push == 3) {
            sorted.push(numCol3);
            numCol3 = collection_3.pop();
            if (numCol3 === undefined) {
                numCol3 = -1;
            }
        }
        // console.log(sorted)
    }
    return sorted.reverse();
}
// console.log(merge(col1, col2, col3));
