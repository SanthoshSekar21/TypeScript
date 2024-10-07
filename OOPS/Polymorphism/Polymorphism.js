var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Parent class
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
    }
    // This method will be overridden by subclasses
    Employee.prototype.work = function () {
        console.log("".concat(this.name, " is working."));
    };
    return Employee;
}());
// Child class 1
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Overriding the work method
    Developer.prototype.work = function () {
        console.log("".concat(this.name, " is writing code."));
    };
    return Developer;
}(Employee));
// Child class 2
var Designer = /** @class */ (function (_super) {
    __extends(Designer, _super);
    function Designer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Overriding the work method
    Designer.prototype.work = function () {
        console.log("".concat(this.name, " is creating designs."));
    };
    return Designer;
}(Employee));
// Creating instances
var emp1 = new Developer("Alice");
var emp2 = new Designer("Bob");
// Polymorphic behavior: Each class responds differently to the same method
emp1.work(); // Output: Alice is writing code.
emp2.work(); // Output: Bob is creating designs.
