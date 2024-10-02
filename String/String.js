//String demonstration in TypeScript
//Declaration
//Explicit Declaration
var firstName = "Santhosh";
var lastName = 'Sekar';
console.log(firstName);
//Implicit Declaration
var greeting = "Hello!"; // TypeScript infers this as a string
console.log(greeting);
//Template Literals:
// Template literals allow you to embed variables and expressions inside a string. 
// They are defined using backticks (`) instead of single or double quotes 
// and support multi-line strings.
var age = 21;
var namess = "Santhosh";
var sentences = "My name is ".concat(namess, ", and I am ").concat(age, " years old.");
console.log(sentences); // Outputs: My name is Santhosh, and I am 21 years old.
//String Methods
//Length property
var username = "Santhosh";
console.log(username.length); // Outputs: 8
//toUpperCase():
//Converts all characters to uppercase.
console.log(username.toUpperCase());
//toLowerCase()
//convert all characters t lowercase
console.log(username.toLowerCase());
//charAt(index): Returns the character at the specified index.
var str = "TypeScript";
console.log(str.charAt(2)); // Outputs: p
//indexOf(searchString): Returns the position of the first occurrence of a specified value. 
//If not found, it returns -1.
console.log(str.indexOf("Type"));
//substring(start, end?): Extracts characters from a string, starting at a specified start position, 
// and returns the characters up to (but not including) the specified end position.
console.log(str.substring(4, 10));
//slice(start, end?): Similar to substring but allows negative indices.
console.log(str.slice(-6));
// replace(searchValue, replaceValue): Searches a string for a specified value or a regular expression, 
// and returns a new string where the specified values are replaced
var str1 = "Hello, World!";
console.log(str1.replace("World", "TypeScript"));
// split(separator, limit?): Splits a string into an array of substrings.
var csv = "red,green,blue";
var colors1 = csv.split(",");
console.log(colors1); // Outputs: ["red", "green", "blue"]
//trim(): Removes whitespace from both sides of a string.
var padded = "   Hello World   ";
console.log(padded.trim()); // Outputs: Hello World
//concat(...strings: string[]): Concatenates one or more strings to the original string.
console.log(str1.concat(" ", str)); // Hello, World! TypeScript
// includes(searchString, position?): Checks whether the string contains the specified substring.
console.log(str.includes("Type"));
// startsWith(searchString, position?): Checks whether the string starts with the specified substring.
console.log(str.startsWith("Type"));
// endsWith(searchString, length?): Checks whether the string ends with the specified substring
console.log(str.endsWith("Script"));
