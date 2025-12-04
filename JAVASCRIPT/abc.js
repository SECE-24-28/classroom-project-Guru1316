// var
console.log(a); // Undefined
var a = 10;
console.log(a);
var a = 20;
a = 20;
console.log(a);
{
    var a = 30;
    console.log(a);
}
console.log(a);

// let
// console.log(b); Referenceerror
let b = 10;
// let b = 20; SyntaxError
console.log(b);
b = 20;
console.log(b);
{
    let b = 30;
    console.log(b);
}
console.log(b);

// const
// console.log(c); ReferenceError
const c = 10;
console.log(c);
{
    const c = 20;
    console.log(c);
}
console.log(c);
// c = 30; TypeError


// Functions

// 1. Named Functions
namedFunc(); // Can be called
function namedFunc()
{
    console.log("Named Function is called");
}
// Function call
namedFunc();


// 2. Function Expression

// i) With var
// funcExp(); TypeError
var funcExp = function() {
    console.log("Function Expression is called");
}
funcExp();

// ii) With let
// funcExp2(); ReferenceError
let funcExp2 = function() {
    console.log("Function Expression is called");
}
funcExp2();

// iii) With const
// funcExp3(); ReferenceError
const funcExp3 = function() {
    console.log("Function Expression is called");
}
funcExp3();


// 3. Arrow Functions

// i) With var
// arrowFunc(); TypeError
var arrowFunc = () => {
    console.log("Arrow Function is called");
}
arrowFunc();

// ii) With let
// arrowFunc2(); ReferenceError
let arrowFunc2 = () => {
    console.log("Arrow Function is called");
}
arrowFunc2();

// iii) With const
// arrowFunc3(); ReferenceError
const arrowFunc3 = () => {
    console.log("Arrow Function is called");
}
arrowFunc3();

// 4. Callback Function (and) 5. IIFE (Immediately Invoking Function Expression)
(() => {
    console.log("Callback and IIFE Functions are called");
})()


// Functions With Parameters and Arguments
const addTwoNumbers = (parameter1, parameter2) => {
    console.log(`The value of parameter 1 is ${parameter1}`);
    console.log(`The value of parameter 2 is ${parameter2}`);
    let num1 = parameter1 || 10; 
    let num2 = parameter2 || 20;
    let sum = num1 + num2;
    // console.log("The sum of Two Numbers is: ",sum); - One Type of Printing 
    console.log(`The sum of Two Numbers is: ${sum}`);
}
addTwoNumbers(20, 50);
addTwoNumbers(40, 50);
addTwoNumbers(); // Output will be NaN - Not a Number if ( OR ) is not used
addTwoNumbers();

// typeof
var x;
console.log(typeof x);
var x = 10;
console.log(typeof x);
var x = "String"
console.log(typeof x);
var x = true;
console.log(typeof x);
var x = 1.1;
console.log(typeof x);

let i = 10;
let j = 2;
console.log(i+j);
console.log(i-j);
console.log(i*j);
console.log(i/j);

let k = "10";
let l = 2;
console.log(k+l);
console.log(k-l);
console.log(k*l);
console.log(k/l);

let m = 10;
let n = "2";
console.log(m+n);
console.log(m-n);
console.log(m*n);
console.log(m/n);

let o = "10";
let p = "2";
console.log(o+p);
console.log(o-p);
console.log(o*p);
console.log(o/p);


// Equality Operator
console.log(2 == "2");
console.log(2 === "2");


// Arrays
let arr1 = [1, 2, 3, "ass"];
let arr2 = [1, 2, 3, "ass"];
console.log(arr1 == arr2);
console.log(arr1 === arr2);
console.log(arr1[0] == arr2[0]);
console.log(arr1[0] === arr2[0]);
console.log([] == []);


// Loops

// For Loop
let arr4 = [1, 2, 3, 4, 5, 6];
console.log(arr4);
for(let i = 0; i < arr4.length; i++)
{
    arr4[i] = arr4[i] + i;
}
console.log(arr4);

// For Each Loop
let arr3 = [1, 2, 3, 4, 5, 6];
console.log(arr3);
arr3.forEach((element, index) => {
    console.log(element, index);
})
let bb = arr3.forEach((element, index) => {
    return element + index;
})
console.log(bb);

// Map
console.log(arr3);
let aa = arr3.map((element, index) => {
    return element + index;
})
console.log(aa);

let aa1 = arr3.map((element, index) => element + index); // Only for single statements
console.log(aa1);


// filter -  For filtering values : Truthy Values
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr5);
let arr5e = arr5.filter( (e) =>
 {
    return e%2 == 1;
 })
 console.log(arr5e);
 let arr5i = arr5.filter( (e, i) =>
 {
    return i>4;
 })
 console.log(arr5i);


 // reduce - Return a single value 
 let arr6 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr6);
let arr6fo = arr6.reduce( (acc, e, i) =>
 {
    console.log(acc, e);
    return acc + e;
 }, 200) //  accumulator initialization
 console.log(arr6fo); //  return a single value after the given operations