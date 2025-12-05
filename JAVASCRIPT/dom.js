// 1) Tag Selector
let heading1 = document.getElementsByTagName("h1");
// HTML Collection Array
console.log(heading1[0]);


// 2) Class Selector
let cl = document.getElementsByClassName("para1");
// HTML Collection Array
console.log(cl[1]);


// 3) ID Selector
let idl = document.getElementById("b");
// If more ids with same name it returns the first content with the respective id
console.log(idl);


// 4) Quert Selector ( Works with all three selectors )
let qs = document.querySelector(".para1");
// Return single value and first value
console.log(qs);


// 5) QuerySelector All ( Works with all three selectors )
let qsa = document.querySelectorAll("#b");
// Return all the values of the given id or class or tag
// Returns as node list
console.log(qsa[1]);