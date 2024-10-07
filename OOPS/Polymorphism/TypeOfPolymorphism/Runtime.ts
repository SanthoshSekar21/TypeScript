// Base class
class Animal {
    makeSound(): void {
        console.log("The animal makes a sound.");
    }
}

// Derived class 1
class Dog extends Animal {
    makeSound(): void {
        console.log("The dog barks.");
    }
}

// Derived class 2
class Cat extends Animal {
    makeSound(): void {
        console.log("The cat meows.");
    }
}

// Polymorphism in action
const animals: Animal[] = [new Dog(), new Cat(), new Animal()];

// Each object calls its own overridden method
animals.forEach(animal => animal.makeSound());
// Output:
// The dog barks.
// The cat meows.
// The animal makes a sound.
