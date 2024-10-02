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
//In TypeScript, classes provide a blueprint for creating objects. 
// They encapsulate data for the object and methods to manipulate that data. 
// Classes in TypeScript are similar to those in other object-oriented languages, such as C# and Java,  but they come with additional type-checking features.
//Basic class
var Person = /** @class */ (function () {
    // Constructor to initialize class properties
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    // Method to greet
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person;
}());
// Creating an instance of the class
var person1 = new Person("Santhosh", 21);
person1.greet(); // Outputs: Hello, my name is Santhosh and I am 21 years old.
//   Constructor:
// A constructor is a special method that is called when creating an object. 
// It’s used to initialize the properties of the class.
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.displayPoint = function () {
        console.log("Point is at (".concat(this.x, ", ").concat(this.y, ")"));
    };
    return Point;
}());
var p1 = new Point(2, 3);
p1.displayPoint(); // Outputs: Point is at (2, 3)
//Access Modifiers
// TypeScript supports three access modifiers for class members: public, private, and protected.
// public (default):
// Members are accessible from anywhere.
// You don’t need to explicitly declare members as public.
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
    }
    return Employee;
}());
var emp = new Employee("Santhosh");
console.log(emp.name); // Outputs: Santhosh
//   private:
// Members are only accessible within the class. 
// They cannot be accessed or modified outside the class.
var BankAccount = /** @class */ (function () {
    function BankAccount(initialBalance) {
        this.balance = initialBalance;
    }
    BankAccount.prototype.showBalance = function () {
        console.log("The balance is ".concat(this.balance));
    };
    return BankAccount;
}());
var account = new BankAccount(1000);
// console.log(account.balance); // Error: 'balance' is private
account.showBalance(); // Outputs: The balance is 1000
//   protected:
// Members are accessible within the class and in subclasses but not from outside
var Vehicle = /** @class */ (function () {
    function Vehicle(speed) {
        this.speed = speed;
    }
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.showSpeed = function () {
        console.log("The speed is ".concat(this.speed));
    };
    return Car;
}(Vehicle));
var car = new Car(120);
car.showSpeed(); // Outputs: The speed is 120
//   Abstract Classes
// An abstract class is a class that cannot be instantiated and is meant to be subclassed. It often includes abstract methods that must be implemented by derived classes.
// Use the abstract keyword to define an abstract class or method.
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.printArea = function () {
        console.log("The area is ".concat(this.getArea()));
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}(Shape));
var circle = new Circle(5);
circle.printArea(); // Outputs: The area is 78.53981633974483
