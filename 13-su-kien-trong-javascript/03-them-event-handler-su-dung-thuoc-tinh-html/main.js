const showAlert = () => {
  alert("call action");
};

const changeButtonStyle = () => {
  const button = document.getElementById("button");
  button.style.backgroundColor = "blue";
  button.style.borderRadius = 4;
  button.style.padding = "4px 10px";
  button.style.border = "none";
  button.style.color = "white";
  button.innerText = "New button";
};

const changeText = (currentNode) => {
  currentNode.innerText = "Text changed";
};
