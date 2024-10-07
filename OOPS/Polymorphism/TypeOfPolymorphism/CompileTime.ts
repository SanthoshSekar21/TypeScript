class Calculator {
    // Overloaded method: multiple signatures for the same method name
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: any, b: any): any {
        if (typeof a === "number" && typeof b === "number") {
            return a + b; // Sum of two numbers
        } else if (typeof a === "string" && typeof b === "string") {
            return a.concat(b); // Concatenation of two strings
        }
    }
}

const calc = new Calculator();
console.log(calc.add(5, 10)); // Output: 15
console.log(calc.add("Hello", "World")); // Output: HelloWorld
