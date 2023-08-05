const exampleDiv = document.getElementById("exampleDiv");

const newDiv = document.createElement("div");
newDiv.textContent = "Hello, world!";

exampleDiv.appendChild(newDiv);

const newButton = document.createElement("button");
newButton.textContent = "submit";

exampleDiv.appendChild(newButton);

const newImage = document.createElement("img");
newImage.src =
  "https://res.cloudinary.com/techmely/image/upload/f_webp,q_auto/v1638635550/assets/home-slide_cl6hzu.svg";
newImage.alt = "Techmely";
exampleDiv.appendChild(newImage);

const itemList = ["Item 1", "Item 2", "Item 3", "Item 4"];

const newList = document.createElement("ul");
itemList.forEach((item) => {
  const newLi = document.createElement("li");
  newLi.textContent = item;
  newList.appendChild(newLi);
});

exampleDiv.appendChild(newList);

const textNode = document.createTextNode("This is a paragraph");
exampleDiv.appendChild(textNode);
