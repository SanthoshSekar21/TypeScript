// Interface definition
interface Animal {
    makeSound(): void;
}

// Class 1: Dog implementing Animal
class Dog implements Animal {
    makeSound(): void {
        console.log("Woof! Woof!");
    }
}

// Class 2: Cat implementing Animal
class Cat implements Animal {
    makeSound(): void {
        console.log("Meow! Meow!");
    }
}

// Class 3: Cow implementing Animal
class Cow implements Animal {
    makeSound(): void {
        console.log("Moo! Moo!");
    }
}

// Creating instances
const animals: Animal[] = [new Dog(), new Cat(), new Cow()];

// Polymorphic behavior: Each animal responds to the same method in its own way
animals.forEach(animal => animal.makeSound());
// Output:
// Woof! Woof!
// Meow! Meow!
// Moo! Moo!
