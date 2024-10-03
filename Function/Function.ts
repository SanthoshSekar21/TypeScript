//Function Demonstration in TypeScript
//Basic function Operation
//Function without parameter and wihtout return type
function f1():void{
    console.log('hi');
};
 f1();
 //Function with Parameter and Return Type
 function greet(name: string): string {
    return `Hello, ${name}!`;
}

console.log(greet('Santhosh')); // Outputs: Hello, Santhosh!

//--------Optional Parameter-----
//You can define optional parameters by adding a question mark (?) after the parameter name.
// Optional parameters can be omitted when calling the function.
function f2(name:string,age:number,isEmployee?:boolean):void{
    console.log(`Name:${name} \n Age:${age} \n isEmployee:${isEmployee}`)
}

f2('santhosh',21);//Name:santhosh Age:21 isEmployee:undefined
//use of optional operator is we optinally give the argument for the parameter to call the function
//Demonstration of the Default parameter
function greetWithDefault(name: string = 'Guest'): string {
    return `Hello, ${name}!`;
}

console.log(greetWithDefault('santhosh')); // Outputs: Hello, santhosh!
console.log(greetWithDefault()); //Hello, Guest!
// Demonstratin of the Spread operator
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Outputs: 10
// Function overloading
//multiple function with same name but difference in method signature
function combine(input1: string, input2: string): string;
function combine(input1: number, input2: number): number;
function combine(input1: any, input2: any): any {
    return input1 + input2;
}

console.log(combine('Hello, ', 'World!')); // Outputs: Hello, World!
console.log(combine(5, 10)); // Outputs: 15
// Arrow Function
const divide = (x: number, y: number): number => {
    if (y === 0) {
        throw new Error("Division by zero");
    }
    return x / y;
};

console.log(divide(10, 2)); // Outputs: 5
//Annonymus Function
const f3= function():void{
    console.log('this is annonymus');
};
f3();

