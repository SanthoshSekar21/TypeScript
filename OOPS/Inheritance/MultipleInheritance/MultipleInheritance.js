//Multiple inheritance is when a class inherits from more than one parent class. 
// This can lead to the diamond problem, where it becomes ambiguous which properties and methods are inherited if they have conflicting definitions.
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log("Bird is flying");
    };
    Bird.prototype.swim = function () {
        console.log("Bird is swimming");
    };
    return Bird;
}());
var duck = new Bird();
duck.fly(); // Output: Bird is flying
duck.swim(); // Output: Bird is swimming
