const showDate = () => {
  const node = document.getElementById("date");
  node.innerText = new Date();
};

const button = document.getElementById("button");
button.onclick = showDate;
