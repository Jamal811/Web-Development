//styling element
/*
title = document.querySelector("#main-heading");
console.log(title);
title.style.color = "red"; //applies only for one element not for all

//for multiple elements use loop
const listitems = document.querySelectorAll(".list-items");
for (i = 0; i < listitems.length; i++) {
  listitems[i].style.fontSize = "3rem";
}
*/

// Creating Elements

/*

const ul = document.querySelector("ul");
const li = document.createElement("li");

//Adding element
ul.append(li);

//modefying the text

const firstListItem = document.querySelector(".list-items");

li.innerText = "X-Men";

//Modefying attributes and classe


li.setAttribute("id", "main-heading");

li.removeAttribute("id");

//another way to get the attribute

title = document.querySelector("#main-heading");
console.log(title.getAttribute("id"));


li.classList.add("list-items");
li.classList.remove("list-items");
console.log(li.classList.contains("list-items"));

//remove element
li.remove();
*/

//diffeent ways to select text or content
/*
console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);
*/

// Traverse the DOM

// Parent Node Traversal

/*
let ul = document.querySelector("ul");
console.log(ul.parentNode);
console.log(ul.parentElement);

console.log(ul.parentNode.parentNode);
console.log(ul.parentElement.parentElement);
*/

// Child Node Traversal

// Indentation are also count as text
/*

let ul = document.querySelector("ul");
console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

// ul.firstChild.style.backgroundColor = "blue"; // will cause error bacause its a text node not an element

ul.childNodes[3].style.backgroundColor = "blue";

console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

*/

//Sibling Node Traversal
/*

let ul = document.querySelector("ul");
console.log(ul);

let div = document.querySelector("div");
console.log(div);
console.log(div.childNodes);

console.log(ul.previousSibling);
console.log(ul.nextSibling);

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);
*/
// Event Delegation
// It allows users to append a single  event listner to a parent element that adds to all of its parent and future descendants that match a selector

/*
code dupplication if you are doing this for all li's

document.querySelector("#matrix").addEventListener("click", function (e) {
  console.log("Matrix is Clicked");

  const target = e.target;

  if (target.matches("li")) target.style.backgroundColor = "lightgrey";
});
*/
document.querySelector("#movies").addEventListener("click", function (e) {
  console.log(e.target.getAttribute("id") + " is clicked");

  const target = e.target;
  if (target.matches("li")) {
    target.style.backgroundColor = "lightgrey";
  }
});

const movie = document.querySelector("#movies");
const newMovie = document.createElement("li");

newMovie.innerHTML = "Avatar";
newMovie.setAttribute("class", "list-items");

movie.append(newMovie);
