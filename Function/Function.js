//Function Demonstration in TypeScript
//Basic function Operation
//Function without parameter and wihtout return type
function f1() {
    console.log('hi');
}
;
f1();
//Function with Parameter and Return Type
function greet(name) {
    return "Hello, ".concat(name, "!");
}
console.log(greet('Santhosh')); // Outputs: Hello, Santhosh!
//--------Optional Parameter-----
//You can define optional parameters by adding a question mark (?) after the parameter name.
// Optional parameters can be omitted when calling the function.
function f2(name, age, isEmployee) {
    console.log("Name:".concat(name, " \n Age:").concat(age, " \n isEmployee:").concat(isEmployee));
}
f2('santhosh', 21); //Name:santhosh Age:21 isEmployee:undefined
//use of optional operator is we optinally give the argument for the parameter to call the function
//Demonstration of the Default parameter
function greetWithDefault(name) {
    if (name === void 0) { name = 'Guest'; }
    return "Hello, ".concat(name, "!");
}
console.log(greetWithDefault('santhosh')); // Outputs: Hello, santhosh!
console.log(greetWithDefault()); //Hello, Guest!
// Demonstratin of the Spread operator
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, num) { return total + num; }, 0);
}
console.log(sum(1, 2, 3, 4)); // Outputs: 10
function combine(input1, input2) {
    return input1 + input2;
}
console.log(combine('Hello, ', 'World!')); // Outputs: Hello, World!
console.log(combine(5, 10)); // Outputs: 15
// Arrow Function
var divide = function (x, y) {
    if (y === 0) {
        throw new Error("Division by zero");
    }
    return x / y;
};
console.log(divide(10, 2)); // Outputs: 5
