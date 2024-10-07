//Hybrid inheritance is a combination of two or more types of inheritance, such as single, multiple, and hierarchical inheritance. 
// TypeScript allows you to create complex relationships using interfaces and classes.
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
// However, TypeScript does not allow for direct multiple inheritance (a class inheriting from multiple classes).
//  Instead, you can achieve hybrid inheritance by combining classes and interfaces.
var Engine = /** @class */ (function () {
    function Engine() {
    }
    Engine.prototype.start = function () {
        console.log("Engine started");
    };
    return Engine;
}());
var Vehicle = /** @class */ (function (_super) {
    __extends(Vehicle, _super);
    function Vehicle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Vehicle.prototype.drive = function () {
        console.log("Vehicle is driving");
    };
    return Vehicle;
}(Engine));
var FlyingCar = /** @class */ (function (_super) {
    __extends(FlyingCar, _super);
    function FlyingCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlyingCar.prototype.fly = function () {
        console.log("Flying car is flying");
    };
    return FlyingCar;
}(Vehicle));
var myFlyingCar = new FlyingCar();
myFlyingCar.start(); // Output: Engine started
myFlyingCar.drive(); // Output: Vehicle is driving
myFlyingCar.fly(); // Output: Flying car is flying
