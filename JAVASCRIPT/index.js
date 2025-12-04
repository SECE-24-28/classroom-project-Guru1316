// console.log(a);
//hoisting
// var a = 10;
// var a = 20;
//global scope / Function scope
// console.log(a);

// {
//     var a = 30;
//     console.log(a);
// }
// console.log(a);

// ES6
// let and const
// console.log(b);
// reference Error
// temporal Dead Zone
// let b = 20;
// b = 130;
// Block Scope

// console.log(b);
// {
//     let b = 30;
//     console.log(b);
// }

// console.log(c);
// const c = 40;
// console.log(c);
// c = 70;

//functions
// 1. Named Functions
// function declaration
function namedFunc() {
    console.log("Namedfunction called");
    console.log("Namedfunction called");
    console.log("Namedfunction called");
}
// function call/Invocation
namedFunc();

// funcExp();
//  2. Function Expression

let funcExp = function () {
    console.log("Function Expression called");
}
funcExp();

// 3. Arrow Functions(ES6)
let arrow = () => {
    console.log("Arrow Function called");
}
arrow();

// 4. Callback Function and 5. IIFE (Immediately Invoked Function Expression)
(() => {
    console.log("Callback and IIFE Function called");
})()