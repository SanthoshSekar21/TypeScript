//------------DataType Demonstrations-----------------------
//Primitive DataTypes-----------------
//----------Number------
//The Datatype Represent Both Integer and FloatPoint
var a = 10;
var b = 20;
console.log(typeof a); //number
console.log(typeof b); //number
console.log(a + b); //30;
var age = 25; // Integer
var temperature = 36.6; // Floating-point
console.log("Age: ".concat(age, ", Temperature: ").concat(temperature));
//-----------String DataType----------------
// The string data type is used to represent textual data. 
//Strings can be enclosed in single quotes, double quotes, or backticks (for template literals).
var names = 'Santhosh';
console.log(names);
var greet = "Welcome to TypeScript ".concat(names);
console.log(greet);
var firstName = "Santhosh";
var lastName = "Sekar";
var fullName = firstName + " " + lastName;
console.log("Full Name: ".concat(fullName));
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
//Implicity declare type for a Varaible
var str = 'Hi this is implicitly declar a type for variable';
console.log(str);
//-------------------Boolean DataType-------------
// Boolean Represent true or false
var isCompleted = true;
var isLoggedIn = false;
console.log("Task Completed: ".concat(isCompleted)); // Outputs: Task Completed: true
console.log("User Logged In: ".concat(isLoggedIn)); // Outputs: User Logged In: false
//------------------Undefined DataType----------------
//undefined is a special type and value that represents the absence of a defined value.
//When a variable is declared but not assigned a value, its value is undefined.
var c;
console.log(c);
var d;
console.log(d);
//---------------------Null DataType
//null DataTYpe represent an uninitilized value
var emptyValue = null;
console.log(emptyValue); // Outputs: null
//------Symbol DataType-----
//Symbol is used to create unique identifier for an object
var sym1 = Symbol(); // Symbol with no description
var sym2 = Symbol("identifier"); // Symbol with a description "identifier"
console.log(sym1); // Outputs: Symbol()
console.log(sym2); // Outputs: Symbol(identifier)
//-----bigint DataType------
//the bigint type is used to represent arbitrarily large integers.
var bigNumber1 = 9007199254740991n; // Using the `n` suffix
var bigNumber2 = BigInt(9007199254740991); // Using the `BigInt()` function
console.log(bigNumber1); // Outputs: 9007199254740991n
console.log(bigNumber2); // Outputs: 9007199254740991n
//-----any -----------
//The any type allow a varaibe to hold any types of values
//It disable type checking for that variable
//which is useful is situation where you need more flexibility a such as working with dynamic content
var data = 'hello';
console.log(typeof data); //string
data = 123;
console.log(typeof data);
data = true;
console.log(typeof data);
//------void-------------
//The void Tye represent the absence of a type. it is typically used for a function s that do nont return a value.
function logManage(message) {
    console.log(message);
}
logManage('Hi this is void function');
//--------never------------
//The never Type represent values that never occur.
//This is typically used in the functions that throw errors or have infinite loops
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
//throwError("this is Error function");
//---------object-------
//The object type represent non primitive type such as arrays,function,and object
var person;
person = { name: 'Santhosh', age: 21 };
console.log(person.name);
console.log(person.age);
//--------------Type Assertion----------
//TypeScript allow you to override inferred and inferred types using type assertions
//this is usefuk whe you know more about a variable type the type script does.
var someValue = 'hello,TypeSccript!';
var StringLength = someValue.length;
console.log(StringLength);
//------Union Types------
//Union type allows a varaible to hold more than one type .
// you  define a union type using the symbol
var id;
id = 123;
console.log(typeof id); //number
id = 'ABC123';
console.log(typeof id); //string
var value = 'Hello';
console.log(value);
//----------Literals Type--------
//Literals Types specify that a variable can hold only  a specific value or set of values .
//you can define literals type using string,number ,or boolean values
var direction;
direction = 'left'; //valid
direction = 'down'; //valid;
console.log(direction);
var p1 = { name: 'santhosh', age: 21, isEmployee: true };
console.log(p1.name);
var manager = {
    name: 'santhosh',
    id: 123,
    department: 'developement'
};
console.log(manager.name);
