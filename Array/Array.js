//Array Demonstrations in TypeSccript
//Declaring using the Array Type Syntax;
var numbers; // An array of numbers
numbers = [1, 2, 3, 4, 5];
console.log(numbers);
//Array Declaration using the Generic Syntax
var fruits = [];
fruits = ['apple', 'banana', 'orange'];
console.log(fruits);
//Accesssing Array Element
var animals = ['dog', 'cat', 'bird'];
console.log(animals[0]); // Outputs: dog
//Tuples
//Tuples are a special type of array that allow you to store a fixed number of elements of different types.
var person = ['Santhosh', 21];
console.log(person[0]); // Outputs: Santhosh
console.log(person[1]); // Outputs: 21
//Array Type Inference
//TypeScript can automatically infer the type of an array based on its initial values.
var colors = ['red', 'green', 'blue']; // Inferred as string[]
//Read-Only Arrays
//You can create read-only arrays using the readonly modifier.
//This prevents any modifications to the array.
var readonlyNumbers = [1, 2, 3];
// readonlyNumbers.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'.
//Array Methods
//push()
//Adds one or more elements to the end of the array and returns the new length of the array.
numbers.push(4, 5);
console.log(numbers);
//pop()
//Removes the last element from an array and returns that element.
var lastFruit = fruits.pop();
console.log(lastFruit); // Outputs: orange
console.log(fruits); // Outputs: ['apple', 'banana']
//unshift()
// Adds one or more elements to the beginning of the array and returns the new length.
var names = ['John', 'Paul'];
names.unshift('George', 'Ringo');
console.log(names); // Outputs: ['George', 'Ringo', 'John', 'Paul']
//shift()
// Removes the first element from an array and returns that element.
var languages = ['TypeScript', 'JavaScript', 'Python'];
var firstLang = languages.shift();
console.log(firstLang); // Outputs: TypeScript
console.log(languages); // Outputs: ['JavaScript', 'Python']
//splice()
// Adds or removes elements from an array. You can specify the starting index, 
//the number of elements to remove, and optionally add new elements.
colors.splice(1, 1, 'yellow'); // Replaces 'green' with 'yellow'
console.log(colors); // Outputs: ['red', 'yellow', 'blue']
//slice()
// Returns a shallow copy of a portion of an array without modifying the original array.
var cities = ['New York', 'London', 'Paris', 'Tokyo'];
var selectedCities = cities.slice(1, 3); // From index 1 to 3 (excluding 3)
console.log(selectedCities); // Outputs: ['London', 'Paris']
//concat()
// Combines two or more arrays and returns a new array.
var arr2 = [4, 5, 6];
var mergedArray = numbers.concat(arr2);
console.log(mergedArray); // Outputs: [1, 2, 3, 4, 5, 6]
//forEach()
// Executes a provided function once for each array element.
var scores = [80, 90, 85];
scores.forEach(function (score, index) {
    console.log("Score ".concat(index + 1, ": ").concat(score));
});
// Outputs:
// Score 1: 80
// Score 2: 90
// Score 3: 85
//map()
// Creates a new array by applying a function to each element of the array.
var doubledNumbers = numbers.map(function (num) { return num * 2; });
console.log(doubledNumbers); // Outputs: [2, 4, 6, 8]
//filter()
//Creates a new array with elements that pass the test implemented by a provided function.
var ages = [10, 20, 30, 40];
var adults = ages.filter(function (age) { return age >= 18; });
console.log(adults); // Outputs: [20, 30, 40]
//reduce()
// Executes a reducer function on each element of the array, resulting in a single output value.
var sums = numbers.reduce(function (total, value) { return total + value; }, 0);
console.log(sums); // Outputs: 24
//find()
// Returns the first element that satisfies the provided testing function.
var users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
var user = users.find(function (user) { return user.name === 'Alice'; });
console.log(user); // Outputs: { id: 1, name: 'Alice' }
//findIndex()
// Returns the index of the first element that satisfies the provided testing function.
var index = numbers.findIndex(function (num) { return num > 4; });
console.log(index); // Outputs: 4 (index of 4)
//sort()
//: Sorts the elements of an array in place and returns the array.
var letters = ['c', 'a', 'b'];
letters.sort();
console.log(letters); // Outputs: ['a', 'b', 'c']
//reverse()
// Reverses the order of the elements in an array in place and returns the array.
numbers.reverse();
console.log(numbers);
//includes()
// Determines whether an array includes a certain element, returning true or false.
var items = ['pen', 'pencil', 'eraser'];
console.log(items.includes('pencil')); // Outputs: true
//join()
// Joins all elements of an array into a string.
var parts = ['The', 'quick', 'brown', 'fox'];
var sentence = parts.join(' ');
console.log(sentence); // Outputs: The quick brown fox
//every()
// Tests whether all elements in the array pass the test implemented by the provided function.
var score = [80, 85, 90];
var allPassed = score.every(function (score) { return score >= 80; });
console.log(allPassed); // Outputs: true
//some()
// Tests whether at least one element in the array passes the test implemented by the provided function.
var hasEvenNumber = numbers.some(function (num) { return num % 2 === 0; });
console.log(hasEvenNumber); // Outputs: true
