// In TypeScript, interfaces are used to define the structure and shape of objects. 
// They allow you to specify the types of properties and methods an object should have. 
// They act as contracts that a class or object should adhere to, 
// making your code more readable, maintainable, and type-safe.
//Declaring Interface
interface Person {
    names: string;
    age: number;
    greet(): void;  // Method with no parameters and no return value
  }
  
  let users: Person = {
    names: "Santhosh",
    age: 25,
    greet: () => console.log("Hello!"),
  };
  
  console.log(users.names);  // Outputs: Santhosh
  console.log(users.age);   // Outputs: 25
  users.greet();            // Outputs: Hello!
//   Optional Properties
// In an interface, some properties might not always be required. 
// To define optional properties, use a ? after the property name
interface Car {
    make: string;
    model: string;
    year?: number;  // Optional property
  }
  
  let myCar: Car = {
    make: "Toyota",
    model: "Camry",
  };
  
  console.log(myCar);  // Outputs: { make: "Toyota", model: "Camry" }
//   Read-Only Properties
// You can specify that some properties of an interface should not be modified
//  after being initialized using the readonly keyword.
interface Book {
    readonly title: string;
    author: string;
  }
  
  let myBook: Book = {
    title: "TypeScript Handbook",
    author: "Microsoft",
  };
  
  // myBook.title = "New Title";  // Error: Cannot assign to 'title' because it is a read-only property.
  console.log(myBook.title);  // Outputs: TypeScript Handbook
//   Interface with Functions
// Interfaces can also define the structure of a function. 
// The syntax is similar, but the interface only includes the function signature.
interface Calculate {
    (num1: number, num2: number): number;
  }
  
  let add: Calculate = (x, y) => x + y;
  console.log(add(5, 10));  // Outputs: 15
//   Extending Interfaces
// An interface can extend other interfaces, 
// Allowing you to combine multiple interfaces into a single, more comprehensive one.
interface BasicInfo {
    name: string;
    age: number;
  }
  
  interface ContactInfo {
    phone: string;
    email: string;
  }
  
  interface Employee extends BasicInfo, ContactInfo {
    position: string;
  }
  
  let employee: Employee = {
    name: "John",
    age: 30,
    phone: "123-456-7890",
    email: "john@example.com",
    position: "Developer",
  };
  
  console.log(employee);
//   Interface with Classes
// Interfaces are commonly used with classes to ensure the class structure matches the interface contract.
interface Animal {
    name: string;
    age: number;
    sound(): string;
  }
  
  class Dog implements Animal {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    sound(): string {
      return "Woof!";
    }
  }
  
  let myDog = new Dog("Buddy", 3);
  console.log(myDog.name);  // Outputs: Buddy
  console.log(myDog.sound());  // Outputs: Woof!
  
