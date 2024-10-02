var users = {
    names: "Santhosh",
    age: 25,
    greet: function () { return console.log("Hello!"); },
};
console.log(users.names); // Outputs: Santhosh
console.log(users.age); // Outputs: 25
users.greet(); // Outputs: Hello!
var myCar = {
    make: "Toyota",
    model: "Camry",
};
console.log(myCar); // Outputs: { make: "Toyota", model: "Camry" }
var myBook = {
    title: "TypeScript Handbook",
    author: "Microsoft",
};
// myBook.title = "New Title";  // Error: Cannot assign to 'title' because it is a read-only property.
console.log(myBook.title); // Outputs: TypeScript Handbook
var add = function (x, y) { return x + y; };
console.log(add(5, 10)); // Outputs: 15
var employee = {
    name: "John",
    age: 30,
    phone: "123-456-7890",
    email: "john@example.com",
    position: "Developer",
};
console.log(employee);
var Dog = /** @class */ (function () {
    function Dog(name, age) {
        this.name = name;
        this.age = age;
    }
    Dog.prototype.sound = function () {
        return "Woof!";
    };
    return Dog;
}());
var myDog = new Dog("Buddy", 3);
console.log(myDog.name); // Outputs: Buddy
console.log(myDog.sound()); // Outputs: Woof!
