//------------DataType Demonstrations-----------------------
//Primitive DataTypes-----------------
//----------Number------
//The Datatype Represent Both Integer and FloatPoint
 let a:number=10;
 let b:number=20;
 console.log(typeof a);//number
 console.log(typeof b);//number
 console.log(a+b);//30;
 let age: number = 25;          // Integer
 let temperature: number = 36.6; // Floating-point
 console.log(`Age: ${age}, Temperature: ${temperature}`);

 //-----------String DataType----------------
 // The string data type is used to represent textual data. 
 //Strings can be enclosed in single quotes, double quotes, or backticks (for template literals).
 let names:string='Santhosh';
 console.log(names);
 let greet:string=`Welcome to TypeScript ${names}`;
 console.log(greet);
 let firstName: string = "Santhosh";
 let lastName: string = "Sekar";
 let fullName: string = firstName + " " + lastName;
 console.log(`Full Name: ${fullName}`);
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
//Implicity declare type for a Varaible
let str='Hi this is implicitly declar a type for variable';
console.log(str);
 //-------------------Boolean DataType-------------
// Boolean Represent true or false
let isCompleted: boolean = true;
let isLoggedIn: boolean = false;

console.log(`Task Completed: ${isCompleted}`); // Outputs: Task Completed: true
console.log(`User Logged In: ${isLoggedIn}`);  // Outputs: User Logged In: false

//------------------Undefined DataType----------------
//undefined is a special type and value that represents the absence of a defined value.
//When a variable is declared but not assigned a value, its value is undefined.
let c:undefined;
console.log(c);
let d;
console.log(d);

//---------------------Null DataType
//null DataTYpe represent an uninitilized value
let emptyValue: null = null;
console.log(emptyValue); // Outputs: null

//------Symbol DataType-----
//Symbol is used to create unique identifier for an object
let sym1 = Symbol('id');               // Symbol with no description
let sym2 = Symbol("identifier");   // Symbol with a description "identifier"

console.log(sym1); // Outputs: Symbol()
console.log(sym2); // Outputs: Symbol(identifier)
//-----bigint DataType------
//the bigint type is used to represent arbitrarily large integers.
let bigNumber1: bigint = 9007199254740991n;  // Using the `n` suffix
let bigNumber2: bigint = BigInt(9007199254740991); // Using the `BigInt()` function

console.log(bigNumber1); // Outputs: 9007199254740991n
console.log(bigNumber2); // Outputs: 9007199254740991n

//------Array-------------
//Array hold a collection of values same types in Typescript you can declare using two methds
//using square brackets type[]
//using Array<type> syntax
let numbers:number[]=[1,2,3,4,5,6];
let username:Array<string>=['santhosh','sathish','kumar'];
console.log(numbers);
console.log(username);

//-------Tuple-------------
//Tuples allow you to define an array with a fixed numbers of elements,where each element can have a different type
let person1:[string,number]=['santhosh',21];
console.log(person1);

//------------Enum-------------
//Enum ara a way of defining named constant which makes your code more readable and maintainable
enum Direction{
    up=1,
    down,
    left,
    right
}
let move:Direction=Direction.up;
console.log(move);
//-----any -----------
//The any type allow a varaibe to hold any types of values
//It disable type checking for that variable
//which is useful is situation where you need more flexibility a such as working with dynamic content
let data:any='hello';
console.log(typeof data)//string
data=123;
console.log(typeof data);
data=true;
console.log(typeof data);

//------void-------------
//The void Tye represent the absence of a type. it is typically used for a function s that do nont return a value.
function logManage(message:string):void{
    console.log(message);
}
logManage('Hi this is void function');
 //--------never------------
 //The never Type represent values that never occur.
 //This is typically used in the functions that throw errors or have infinite loops
 function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
}

//throwError("this is Error function");
//---------object-------
//The object type represent non primitive type such as arrays,function,and object
let person:{name:string;
    age:number
};
person={name:'Santhosh',age:21};
console.log(person.name);
console.log(person.age);
//--------------Type Assertion----------
//TypeScript allow you to override inferred and inferred types using type assertions
//this is usefuk whe you know more about a variable type the type script does.

let someValue:any='hello,TypeSccript!';
let StringLength:number=(someValue as String).length;
console.log(StringLength);

//------Union Types------
//Union type allows a varaible to hold more than one type .
// you  define a union type using the symbol
let id:string|number;
id=123;
console.log(typeof id);//number
id='ABC123';
console.log(typeof id);//string
//----Type Alias---------
//You can define custom type using the type keyword.
//this allow you t create  more complex type using a combination of existing types.
type stringOrNumber=string|number;
let value:stringOrNumber='Hello';
console.log(value);
//----------Literals Type--------
//Literals Types specify that a variable can hold only  a specific value or set of values .

//you can define literals type using string,number ,or boolean values
let direction:'left'|'right'|'up'|'down';
direction='left';//valid
direction='down';//valid;
console.log(direction);
//------Interface------
//Interface define the shape of an object  
//They are useful for defining the structure  and types of object properties
interface person{
    name:string;
    age:number;
    isEmployee?:boolean;
}
let p1:person={name:'santhosh',age:21,isEmployee:true};
console.log(p1.name);


//------intersection type----
//intersection types combine multiple types into one .
//An intersectin type uses the  '&' operator
interface Employee {
    name:string;
    id:number;
}
interface Managers{
    department:string;
}
let manager:Employee&Managers={
    name:'santhosh',
    id:123,
    department:'developement'
};
console.log(manager.name);
