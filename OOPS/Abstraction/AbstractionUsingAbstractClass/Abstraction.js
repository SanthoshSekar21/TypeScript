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
var Vehicle = /** @class */ (function () {
    function Vehicle(brand) {
        this.brand = brand;
    }
    return Vehicle;
}());
;
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brand) {
        return _super.call(this, brand) || this;
    }
    Car.prototype.travel = function () {
        console.log("To travel using the  ".concat(this.brand, " car "));
    };
    ;
    return Car;
}(Vehicle));
;
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike(brand) {
        return _super.call(this, brand) || this;
    }
    Bike.prototype.travel = function () {
        console.log("to travel using ".concat(this.brand, " bike"));
    };
    ;
    return Bike;
}(Vehicle));
;
var car = new Car("Thar");
car.travel();
var bike = new Bike('rx100');
bike.travel();
