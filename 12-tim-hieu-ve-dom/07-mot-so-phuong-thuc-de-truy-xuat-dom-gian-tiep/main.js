// childNodes

const container = document.querySelector(".container");

console.log(container.childNodes);
console.log(container.firstChild);
console.log(container.lastChild);

const div = document.querySelector("div");

console.log(div.nextSibling.nextSibling);
console.log(div.previousSibling.previousSibling);
console.log(div.parentNode);
