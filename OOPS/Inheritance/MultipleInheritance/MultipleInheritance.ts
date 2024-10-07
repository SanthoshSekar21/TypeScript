//Multiple inheritance is when a class inherits from more than one parent class. 
// This can lead to the diamond problem, where it becomes ambiguous which properties and methods are inherited if they have conflicting definitions.

// TypeScript does not support multiple inheritance directly.
//  Instead, you can use interfaces to achieve a similar effect.
interface Flyable {
    fly(): void;
}

interface Swimmable {
    swim(): void;
}

class Bird implements Flyable, Swimmable {
    public fly(): void {
        console.log("Bird is flying");
    }

    public swim(): void {
        console.log("Bird is swimming");
    }
}

const duck = new Bird();
duck.fly();   // Output: Bird is flying
duck.swim();  // Output: Bird is swimming
