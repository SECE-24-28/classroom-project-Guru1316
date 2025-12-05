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


// Read and Write Operations
let head = document.querySelector("p");
// Read Operation
console.log(head.textContent);
// Write Operation
head.textContent = "This is the new paragraph content";

let div = document.querySelector("div");
div.innerHTML = "<p>Hello from Div Para</p>";
console.log(div.innerHTML);
console.log(div.textContent);


// add/remove/toggle class
let x = document.querySelector("h1");
console.log(x);
// Adds Class
x.classList.add("color");
// Removes Class
x.classList.remove("border");
// Toggles Class If Added then it will remove else it will add it
x.classList.toggle("background");


// Styling
let p = document.querySelector("p");
p.style.color = "white";
p.style.backgroundColor = "green";


// Creating Element
let ul = document.createElement("ul");
let lii = document.createElement("li");
let lii1 = document.createElement("li");
lii.textContent = "Item 1";
lii1.textContent = "Item 2";
ul.appendChild(lii); 
ul.appendChild(lii1); 
document.body.appendChild(ul);

let arr = ["Apple", "Banana", "Mango"]; // Send those items in array to list using for each loop
arr.forEach((element) => 
{
    let lo = document.createElement("li");
    lo.textContent = element;
    ul.appendChild(lo);
})