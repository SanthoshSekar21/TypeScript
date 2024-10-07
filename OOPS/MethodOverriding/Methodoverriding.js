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
// Base class
var Vehicle = /** @class */ (function () {
    function Vehicle(brand) {
        this.brand = brand;
    }
    // Method to be overridden
    Vehicle.prototype.startEngine = function () {
        console.log("Starting the engine of the vehicle (".concat(this.brand, ")..."));
    };
    return Vehicle;
}());
// Derived class
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brand, model) {
        var _this = _super.call(this, brand) || this;
        _this.model = model;
        return _this;
    }
    // Overriding the parent method
    Car.prototype.startEngine = function () {
        _super.prototype.startEngine.call(this);
        console.log("Starting the engine of the car (".concat(this.brand, " - ").concat(this.model, ")..."));
    };
    return Car;
}(Vehicle));
// Creating instances
var genericVehicle = new Vehicle("Generic Brand");
var myCar = new Car("Toyota", "Corolla");
// Calling the method
genericVehicle.startEngine(); // Output: Starting the engine of the vehicle (Generic Brand)...
myCar.startEngine(); // Output: Starting the engine of the car (Toyota - Corolla)...
