const parentElement = document.getElementById("parent");

// appendChild
const child3 = document.createElement("p");
child3.textContent = "This is child 3";
child3.setAttribute("id", "child3");

parentElement.appendChild(child3);

// remove child
const child1 = document.getElementById("child1");
parentElement.removeChild(child1);

const child4 = document.createElement("p");
child4.textContent = "This is child 4";
child4.setAttribute("id", "child4");

// insertBefore
const child2 = document.getElementById("child2");
parentElement.insertBefore(child4, child2);

// replaceChild
const child5 = document.createElement("p");
child5.textContent = "This is child 5";
child5.setAttribute("id", "child5");
parentElement.replaceChild(child5, child2);
