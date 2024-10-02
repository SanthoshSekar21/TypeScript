//Array Demonstrations in TypeSccript
 //Declaring using the Array Type Syntax;
 
 let numbers: number[]; // An array of numbers
 numbers = [1, 2, 3, 4, 5];
  
 console.log(numbers);
   //Array Declaration using the Generic Syntax
   let fruits:Array<string>=[];
   fruits = ['apple', 'banana', 'orange'];
   console.log(fruits);
   //Accesssing Array Element
   let animals: string[] = ['dog', 'cat', 'bird'];
   console.log(animals[0]); // Outputs: dog
   //Tuples
   //Tuples are a special type of array that allow you to store a fixed number of elements of different types.
   let person: [string, number] = ['Santhosh', 21];
    console.log(person[0]); // Outputs: Santhosh
    console.log(person[1]); // Outputs: 21
 //Array Type Inference
 //TypeScript can automatically infer the type of an array based on its initial values.
 let colors = ['red', 'green', 'blue']; // Inferred as string[]

 //Read-Only Arrays
//You can create read-only arrays using the readonly modifier.
 //This prevents any modifications to the array.
 let readonlyNumbers: readonly number[] = [1, 2, 3];
// readonlyNumbers.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'.
//Array Methods
//push()
//Adds one or more elements to the end of the array and returns the new length of the array.

numbers.push(4, 5);
console.log(numbers);
//pop()
//Removes the last element from an array and returns that element.
const lastFruit = fruits.pop();
console.log(lastFruit); // Outputs: orange
console.log(fruits);    // Outputs: ['apple', 'banana']
//unshift()
// Adds one or more elements to the beginning of the array and returns the new length.
let names: string[] = ['John', 'Paul'];
names.unshift('George', 'Ringo');
console.log(names); // Outputs: ['George', 'Ringo', 'John', 'Paul']
//shift()
// Removes the first element from an array and returns that element.
let languages: string[] = ['TypeScript', 'JavaScript', 'Python'];
const firstLang = languages.shift();
console.log(firstLang);   // Outputs: TypeScript

console.log(languages);   // Outputs: ['JavaScript', 'Python']

//splice()
// Adds or removes elements from an array. You can specify the starting index, 
//the number of elements to remove, and optionally add new elements.
colors.splice(1, 1, 'yellow'); // Replaces 'green' with 'yellow'
console.log(colors); // Outputs: ['red', 'yellow', 'blue']
//slice()
// Returns a shallow copy of a portion of an array without modifying the original array.
let cities: string[] = ['New York', 'London', 'Paris', 'Tokyo'];
let selectedCities = cities.slice(1, 3); // From index 1 to 3 (excluding 3)
console.log(selectedCities); // Outputs: ['London', 'Paris']

//concat()
// Combines two or more arrays and returns a new array.
let arr2: number[] = [4, 5, 6];
let mergedArray = numbers.concat(arr2);
console.log(mergedArray); // Outputs: [1, 2, 3, 4, 5, 6]
//forEach()
// Executes a provided function once for each array element.
let scores: number[] = [80, 90, 85];
scores.forEach((score, index) => {
  console.log(`Score ${index + 1}: ${score}`);
});
// Outputs:
// Score 1: 80
// Score 2: 90
// Score 3: 85
//map()
// Creates a new array by applying a function to each element of the array.
let doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers); // Outputs: [2, 4, 6, 8]
//filter()
//Creates a new array with elements that pass the test implemented by a provided function.
let ages: number[] = [10, 20, 30, 40];
let adults = ages.filter(age => age >= 18);
console.log(adults); // Outputs: [20, 30, 40]
//reduce()
// Executes a reducer function on each element of the array, resulting in a single output value.
let sums= numbers.reduce((total, value) => total + value, 0);
console.log(sums); // Outputs: 24
//find()
// Returns the first element that satisfies the provided testing function.
let users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
let user = users.find(user => user.name === 'Alice');
console.log(user); // Outputs: { id: 1, name: 'Alice' }
//findIndex()
// Returns the index of the first element that satisfies the provided testing function.
let index = numbers.findIndex(num => num > 4);
console.log(index); // Outputs: 4 (index of 4)
//sort()
//: Sorts the elements of an array in place and returns the array.
let letters: string[] = ['c', 'a', 'b'];
letters.sort();
console.log(letters); // Outputs: ['a', 'b', 'c']
//reverse()
// Reverses the order of the elements in an array in place and returns the array.
numbers.reverse();
console.log(numbers);
//includes()
// Determines whether an array includes a certain element, returning true or false.
let items: string[] = ['pen', 'pencil', 'eraser'];
console.log(items.includes('pencil')); // Outputs: true

//join()
// Joins all elements of an array into a string.
let parts: string[] = ['The', 'quick', 'brown', 'fox'];
let sentence = parts.join(' ');
console.log(sentence); // Outputs: The quick brown fox
//every()
// Tests whether all elements in the array pass the test implemented by the provided function.
let score: number[] = [80, 85, 90];
let allPassed = score.every(score => score >= 80);
console.log(allPassed); // Outputs: true
//some()
// Tests whether at least one element in the array passes the test implemented by the provided function.
let hasEvenNumber = numbers.some(num => num % 2 === 0);
console.log(hasEvenNumber); // Outputs: true