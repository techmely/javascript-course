const exampleDiv = document.getElementById("exampleDiv");

console.log(exampleDiv.getAttribute("id"));
console.log(exampleDiv.getAttribute("class"));
console.log(exampleDiv.getAttribute("data-custom"));
console.log(exampleDiv.getAttribute("style"));

exampleDiv.setAttribute("style", "background-color: red");
console.log(exampleDiv.getAttribute("style"));
