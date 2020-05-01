"use strict";

var multiplier = {
    // numbers -array of numbers
    // multiplyBy - single number
    // multiply returns new array
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this = this;

        // ES6 syntax
        return this.numbers.map(function (num) {
            return num * _this.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
