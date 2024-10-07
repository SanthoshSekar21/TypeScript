//In multi-level inheritance, a class is derived from another class, which is also derived from another class, creating a chain of inheritance. 
// This type of inheritance establishes a parent-child-grandchild relationship.
class Animal {
    public eat(): void {
        console.log("Eating...");
    }
}

class Mammal extends Animal {
    public giveBirth(): void {
        console.log("Giving birth...");
    }
}

class Human extends Mammal {
    public speak(): void {
        console.log("Speaking...");
    }
}

const person = new Human();
person.eat();       // Output: Eating...
person.giveBirth(); // Output: Giving birth...
person.speak();     // Output: Speaking...
