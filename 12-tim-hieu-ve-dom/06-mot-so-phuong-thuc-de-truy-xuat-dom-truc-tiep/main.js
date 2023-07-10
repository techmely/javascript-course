// getElementById

const heading = document.getElementById("heading");

console.log(heading.innerText);

// getElementByClassName

const paragraphs = document.getElementsByClassName("container");

console.log(paragraphs[0]);

// getElementByTagName

const listItems = document.getElementsByTagName("li");

console.log(listItems);

// getElementsByName

const inputs = document.getElementsByName("password");

console.log(inputs);

// querySelector
const container = document.querySelector(".container");
console.log(container);

// querySelectorAll

const containers = document.querySelectorAll(".container");
console.log(containers);

const heading2 = document.querySelector("#heading");
console.log(heading2);

const paragraphs2 = document.querySelectorAll(".container p");
console.log(paragraphs2);

const input = document.querySelectorAll("input[name='username'");
console.log(input);
