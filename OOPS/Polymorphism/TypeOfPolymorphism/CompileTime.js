var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        if (typeof a === "number" && typeof b === "number") {
            return a + b; // Sum of two numbers
        }
        else if (typeof a === "string" && typeof b === "string") {
            return a.concat(b); // Concatenation of two strings
        }
    };
    return Calculator;
}());
var calc = new Calculator();
console.log(calc.add(5, 10)); // Output: 15
console.log(calc.add("Hello", "World")); // Output: HelloWorld
