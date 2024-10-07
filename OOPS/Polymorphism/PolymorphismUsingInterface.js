// Class 1: Dog implementing Animal
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.makeSound = function () {
        console.log("Woof! Woof!");
    };
    return Dog;
}());
// Class 2: Cat implementing Animal
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.makeSound = function () {
        console.log("Meow! Meow!");
    };
    return Cat;
}());
// Class 3: Cow implementing Animal
var Cow = /** @class */ (function () {
    function Cow() {
    }
    Cow.prototype.makeSound = function () {
        console.log("Moo! Moo!");
    };
    return Cow;
}());
// Creating instances
var animals = [new Dog(), new Cat(), new Cow()];
// Polymorphic behavior: Each animal responds to the same method in its own way
animals.forEach(function (animal) { return animal.makeSound(); });
// Output:
// Woof! Woof!
// Meow! Meow!
// Moo! Moo!
