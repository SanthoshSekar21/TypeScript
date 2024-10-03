//Type Alias is a way to create a new name for an existing type in typesccript
//It's a convenient way to simplify the complex type definitions or create custom types that you can reuse throughout your codebase
//Using type aliass,yu can give a name to any type: primitive,uion types,tuple types,function types and even object types
 //using primitivee types
 type ID=number;
 type username=string;
 let userId:ID=123;
 let names:username='santhosh';
 console.log( userId);
 //-------Union Types------------
 //Type aliases are extremely useful for defining union types, where a variable can have multiple types.
 type StringOrNumber = string | number;

let data: StringOrNumber;
data = "Hello";
data = 42;
// Object Types You can use type aliases to create a shorthand for object types, making them easier to use and understand.
type Person = {
    name: string;
    age: number;
  };
  
  let employee: Person = { name: "Santhosh", age: 21 };
  //Function Types Type aliases can represent a function signature. This helps in defining and reusing function types.
  type Greet = (name: string) => string;

const greetUser: Greet = (name: string) => {
  return `Hello, ${name}`;
};

console.log(greetUser("Santhosh")); // Output: Hello, Santhosh
//Tuples Tuples in TypeScript represent fixed-size arrays with specific types for each element.
type NameAndAge = [string, number];

let userInfo: NameAndAge = ["Alice", 25];
//Intersection Types Intersection types combine multiple types into one.
type Employee = {
    name: string;
    id: number;
  };
  type Manager = {
    department: string;
  };
  
  type Management = Employee & Manager;
  
  let manager: Management = { name: "Bob", id: 123, department: "HR" };
  
  //Creating Complex Types You can build complex types using nested structures and type aliases.
  type Address = {
    street: string;
    city: string;
    zipcode: string;
  };
  
  type Customer = {
    id: number;
    name: string;
    address: Address;
  };
  
  let customer: Customer = {
    id: 101,
    name: "Jane",
    address: {
      street: "123 Main St",
      city: "New York",
      zipcode: "10001",
    },
  };
  